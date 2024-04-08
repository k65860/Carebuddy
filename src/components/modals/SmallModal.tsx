import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 배경에 흐릿한 효과 추가 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* 최상위로 설정 */
`;

const ModalContent = styled.div`
  position: relative; /* 상대적 위치 설정 */
  width: 400px;
  height: auto;
  background-color: white;
  border-radius: 7px;
  border: 1px solid #cecece;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10000; /* 최상위로 설정 */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  text-align: center;
  line-height: 23px;
  font-size: 16px;
  padding: 10px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 18px;
  padding: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 40px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => (props.primary ? '#6d987a' : 'white')};
  color: ${(props) => (props.primary ? 'white' : '#343434')}; /* primary 버튼의 글자색을 흰색으로 설정 */
`;

const Logo = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

interface ModalProps {
  onClose: () => void;
  component: ReactNode;
}

const SmallModal: React.FC<ModalProps> = ({ onClose, component:Component }) => {

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Container>
          {Component}
        </Container>
      </ModalContent>
    </ModalBackground>
  );
};

export default SmallModal;
