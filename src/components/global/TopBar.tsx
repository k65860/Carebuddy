import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from './../../constants/constants';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

// styled-components를 사용하여 TopBar 스타일 정의
const TopBarContainer = styled.div`
  background-color: #eeede5;
  color: #343434;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  font-size: var(--font-size-lg-2); //32
`;
const Container = styled.div`
  padding: 8px 0;
  width: 1024px;
`;

const Category = styled.div`
  font-size: 14px;
`;

const Title = styled.div`
  font-size: var(--font-size-hd-2); //22
  font-weight: bold;
  padding-top: 5px;
`;

interface DummyData {
  name: number;
  group: string;
  menu: string[];
}

const DummyData: DummyData = {
  name: 0,
  group: '눈 / 피부 / 귀',
  menu: [
    'carebuddy',
    '커뮤니티',
    '건강관리',
    '정보',
    '마이페이지',
    '로그인 / 회원가입',
  ],
};

interface Group {
  _id: string;
  name: number;
  group: string;
}
interface Props {
  userId: string; // Props로 userId 추가
}

const TopBar: React.FC<Props> = ({ userId }) => {
  const location = useLocation();
  const { pathname } = location;

  const postId = '661762dce744e418e35138e3';

  const [group, setGroup] = useState<Group[]>([]);

  {/*useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}groups`);
        const groupData = response.data.message;

        console.log('group과 일치하는 데이터:', groupData);
        setGroup(groupData);
      } catch (error) {
        console.error('에러', error);
      }
    };

    fetchData();
  }, []);*/}

  let menuIndex = 0; // 초기값으로 첫 번째 메뉴인 'carebuddy'를 선택합니다.
  let menuName = ''; // menuName의 초기값은 빈 문자열입니다.

// path name에 따라 해당하는 메뉴 이름을 설정합니다.
DummyData.menu.forEach((item, index) => {
  if (pathname === '/' && index === 0) {
    menuIndex = index;
    menuName = '반려동물 건강 서비스';
  } else if (pathname === '/community' && item === '커뮤니티') {
    menuIndex = index;
    menuName = '커뮤니티';
  } else if (pathname === '/mypage' && item === '마이페이지') {
    menuIndex = index;
    menuName = '회원 정보 관리';
  } else if (pathname === '/userpage' && item === 'carebuddy') {
    menuIndex = index;
    menuName = '유저 페이지';
  } else if (pathname === '/diary' && item === '건강관리') {
    menuIndex = index;
    menuName = '건강 다이어리';
  } else if (pathname === '/group' && item === '커뮤니티') {
    menuIndex = index;
    menuName = '모든 그룹';
  } else if (pathname === '/signup' && item === 'carebuddy') {
    menuIndex = index;
    menuName = '로그인 / 회원가입';
  } else if (pathname === '/post' && item === '커뮤니티') {
    menuIndex = index;
    menuName = '피드 상세 보기';
  } else if (pathname === '/hospital-info' && item === '정보') {
    menuIndex = index;
    menuName = '동물 병원 검색';
  } else if (pathname === '/signup-info' && item === 'carebuddy') {
    menuIndex = index;
    menuName = '회원가입';
  } else if (pathname === '/feed' && item === '커뮤니티') {
    menuIndex = index;
    menuName = '커뮤니티 이름';
    //유저페이지는 userId에 따라 각각 다른 데이터가 들어간 화면이 보여야 함
  } else if (pathname.includes('/userpage/') && item === 'carebuddy') {
    // '/userpage/'을 포함하면서 'carebuddy'인 경우, 즉 userpage/:id일 때
    menuIndex = index;
    menuName = '유저 페이지';
  }
});


  return (
    <TopBarContainer>
      <Container>
        <Category>{DummyData.menu[menuIndex]}</Category>
        <Title>{menuName}</Title>
      </Container>
    </TopBarContainer>
  );
};

export default TopBar;
