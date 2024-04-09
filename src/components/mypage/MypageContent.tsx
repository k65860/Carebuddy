import styled from 'styled-components';
import React from 'react';
import UserInfo from './UserInfoSection';
import Profile from './ProfileSection'
import PetCard from './PetCardSection'
import List from './ListSection'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;


const MypageContent: React.FC = () => {
  return (
    <Container>
      <UserInfo />
      <Profile />
      <PetCard />
      <List />
    </Container>
  );
};

export default MypageContent;
