import axios from 'axios';
import { atom, selector } from 'recoil';
import { API_URL } from '../constants/constants';

interface User {
  // 구현되면 정의
}
export const userToken = atom({
  key: 'userToken',
  default: '',
});
// 외부 API에서 유저 정보를 가져오는 함수
const getUserData = async () => {
  const cookieExists = document.cookie
    .split(';')
    .some((cookie) => cookie.trim().startsWith('accessToken='));
  console.log('Document cookies:', document.cookie);

  if (cookieExists && window.location.pathname !== '/signup-info') {
    try {
      console.log(`${API_URL}me`);
      // 유저 정보를 가져오는 API 요청
      // const response = await axios.get<User>(`${API_URL}users/${userIdOrToken}`);
      const response = await axios.get<User>(`${API_URL}me`, {
        withCredentials: true, // 이 옵션을 통해 axios가 쿠키를 요청에 포함시킵니다.
      });
      console.log('me호출');
      if (response.status === 200) {
        // console.log(response.data);
        console.log('user 조회 성공하면 여기 값:', response.data);
        return response.data.user;
      }
    } catch (error) {
      // console.error('Error fetching user data:', error);
      return null;
    }
  } else return null;
};

// selectorFamily를 사용하여 비동기로 유저 정보를 가져오는 선택자 정의
export const userQuery = selector({
  key: 'userQuery',
  get: async ({ get }) => {
    const token = get(userToken);
    try {
      if (token === null) {
        return null;
      }
      // 외부 API에서 유저 정보를 가져옴
      const userData = await getUserData();
      if (userData === null) {
        return null;
      } else {
        return userData;
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  },
});
