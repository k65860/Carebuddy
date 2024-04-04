import React from 'react';
import styled from 'styled-components';
import imgSrc from './../assets/carebuddyLogo.png';
import search from '../assets/searchIcon.png'
import user from './../assets/userIcon.png'
import alert from './../assets/alertIcon.png'
import TopBar from './TopBar';
import { Link } from 'react-router-dom'; 

// styled-components를 사용하여 header 스타일 정의
const HeaderContainer = styled.header`
  background-color: white;
  font-weight: bold;
  font-size: 22px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #343434;
  padding: 10px 0 10px 0;
  width: 100%;
  height: 100px;
  position: fixed; /* 헤더를 고정 */
  top: 0; /* 페이지 상단에 고정 */
  z-index: 1000; /* 다른 요소 위에 헤더 표시 */

`;

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.img`
  cursor: pointer;
  width: 130px;
  height: 70px;
`;

const Icon = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  padding: 0 10px 0 10px;
`;

const Login = styled.a`
  cursor: pointer;
  font-size: 18px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: end;
`

const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 70%;
`
const Category = styled.a`
  & a {
    text-decoration: none;
    color: inherit;
  }
`
const Header: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <Container>
          <Category><Link to="/signup"><Login>로그인</Login></Link></Category>
          <MenuBox>
            <Link to="/"><Logo src={imgSrc} /></Link>
            <Category><Link to="/community">커뮤니티</Link></Category>
            <Category><Link to="/">건강관리</Link></Category>
            <Category><Link to="/">정보</Link></Category>
            <Icon src={search} />
            <Link to="/mypage"><Icon src={user} /></Link>
            <Icon src={alert} />
          </MenuBox>
        </Container>
      </HeaderContainer>
      <TopBar />
    </>
  );
};

export default Header;
