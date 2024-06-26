import React, { ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../../components/baseComponent/Button';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  position: relative;
  width: 60%;
  max-height: 80vh;
  background-color: var(--color-white);
  border-radius: 7px;
  border: 1px solid var(--color-grey2);
  border-top: 20px solid #6d987a;
  padding: 20px 60px;
  display: flex;
  justify-content: center;
  z-index: 10000;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Container = styled.div`
  padding-top: 10px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.div`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-hd-1); //20
  color: var(--color-green-main);
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-grey-2);
`;

const ButtonContainer = styled.div`
  padding: 20px 0 20px 0;
`;

interface ModalProps {
  onClose: () => void;
  onHandleClick?: () => void; //빌드용 선택자 처리
  component: ReactNode;
  title: string;
  value: string;
}

const BigModal: React.FC<ModalProps> = ({
  title,
  value,
  onClose,
  component: Component,
  onHandleClick, // 지우지 말아주세요(모달 버튼 클릭 핸들러 필요)
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // 모달 열렸을 때 배경 스크롤 막음

    return () => {
      document.body.style.overflow = 'auto'; // 닫혔을 때 다시 스크롤 가능하게 만듦
    };
  }, []);

  const handleModalBackgroundClick = () => {
    onClose(); // 모달 닫기 함수 호출
  };

  return (
    <ModalBackground onClick={handleModalBackgroundClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Container>
          <Title>{title}</Title>
          {Component}
          <ButtonContainer>
            <Button
              variant="primary"
              fontSize="ft-1"
              padding="0 20px"
              margin="0 10px 0 0"
              onClick={onHandleClick}
            >
              {value}
            </Button>
            <Button
              fontSize="ft-1"
              padding="0 20px"
              onClick={handleModalBackgroundClick}
            >
              취소
            </Button>
          </ButtonContainer>
        </Container>
      </ModalContent>
    </ModalBackground>
  );
};

export default BigModal;
