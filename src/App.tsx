import AppRouter from './routes/Router';
import GlobalStyle from './components/global/GlobalStyle';
import { RecoilRoot } from 'recoil';
import { useEffect } from 'react'; // 한 번만 임포트
import UserAPI from './services/userAPI';
import axios from 'axios';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://kdt-sw-8-team01.elicecoding.com/auth/checking', { withCredentials: true });
        console.log(response)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <RecoilRoot>
      <GlobalStyle />
      <AppRouter />
      <UserAPI />
    </RecoilRoot>
  );
};

export default App;
