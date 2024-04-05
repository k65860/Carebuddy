import React from 'react';
import styled from 'styled-components';

import MoreKebabIcon from '../../assets/MoreKebabIcon.png';
import CareIcon from '../../assets/CareIcon.png';

const HealthDiaryContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 45px 80px 40px 60px;
  border: 1px solid #cecece;
  border-radius: 6px 80px 6px 6px;
  margin-top: 100px;
  position: relative;
  margin-bottom: 10%;
`;

// 프로필카드 타이틀과 다이어리 타이틀을 구분
const Title = styled.h2`
  font-size: ${(props) => (props.className === 'diaryTitle' ? '26px' : '22px')};
  font-weight: ${(props) =>
    props.className === 'diaryTitle' ? 'bold' : '500'};
  height: ${(props) => (props.className === 'diaryTitle' ? '115px' : 'auto')};
  color: ${(props) =>
    props.className === 'diaryTitle' ? '#6d987a' : 'inherit'};
  margin-left: ${(props) =>
    props.className === 'deseaseTitle' ? '10px' : '0'};
`;

const HorizontalLine = styled.div`
  border-top: 2px solid rgba(152, 185, 156, 0.5);
  top: 115px;
  left: 0;
  width: 100%;
  position: absolute;
`;

// 기록하기 버튼 => 공통 컴포넌트로 변경 필요
const AddDiaryBtn = styled.button`
  width: 134px;
  height: 35px;

  background: #6d987a;
  border: 0;
  color: #ffffff;
`;

// 타이틀을 포함한 다이어리 컨테이너
const DiariesContainer = styled.div`
  height: 280px;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 150px;
`;

// 다이어리 본문 컨테이너
const HealthReport = styled.div`
  padding: 20px 3%;
  margin-top: 24px;
  height: 100%;
  border: 1px solid #7d7d7d;
  border-radius: 6px;
  display: flex;
  position: relative;
`;

const MoreIcon = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 30px;
  right: 30px;
  cursor: pointer;
  color: #cecece;
`;

const DeseaseName = styled.div`
  display: flex;
  height: 26px;
  width: 20%;
  padding-top: 26px;
  padding-right: 30px;
`;

const DiaryDetailsLeft = styled.div`
  display: flex;
  border-left: solid 2px #cecece;
  padding: 26px 4%;
  flex-direction: column;
  width: 35%;
`;

const DiaryDetailsRight = styled.div`
  display: flex;
  padding: 26px 30px;
  flex-direction: column;
  width: 35%;
`;

// 질병에 대한 상세 정보 컨테이너
const DiaryDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const DiaryDetail = styled.div`
  margin-left: 15px;
  margin-bottom: 30px;
  margin-right: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DetailTitle = styled.p`
  width: 300px;
  font-weight: bold;

  + p {
    font-size: 18px;
    margin-top: 4px;
    line-height: 22px;
    white-space: pre-wrap;

    > span {
      font-size: 16px;
      color: #7d7d7d;
    }
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

interface DiaryProps {
  petName: string;
  visitDate: Date;
  desease: string;
  symptom: string;
  hospitalizationStatus: Date;
  memo: string;
  hospitalName: string;
  doctor: string;
  treatment: string;
}

// Date 포맷팅 함수
const formatDate = (date: Date, includeTime: boolean = false) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  if (includeTime) {
    options.hour = '2-digit';
    options.minute = '2-digit';
    options.hour12 = true;
  }

  return date.toLocaleDateString('ko-KR', options);
};

const HealthDiary: React.FC<DiaryProps> = ({
  petName,
  visitDate,
  desease,
  symptom,
  hospitalizationStatus,
  memo,
  hospitalName,
  doctor,
  treatment,
}) => {
  return (
    <HealthDiaryContainer>
      <Title className="diaryTitle">
        {petName} <span>건강 다이어리</span>
      </Title>
      <HorizontalLine />
      <AddDiaryBtn>기록하기</AddDiaryBtn>
      <DiariesContainer>
        <p>{formatDate(visitDate, true)}</p>
        <HealthReport>
          <MoreIcon src={MoreKebabIcon} />
          <DeseaseName>
            <Icon style={{ width: '25px', height: '25px' }} src={CareIcon} />
            <Title className="deseaseTitle">{desease}</Title>
          </DeseaseName>
          <DiaryDetailsLeft>
            <DiaryDetailContainer>
              <Icon src={CareIcon} />
              <DiaryDetail>
                <DetailTitle>증상</DetailTitle>
                <p>{symptom}</p>
              </DiaryDetail>
            </DiaryDetailContainer>
            <DiaryDetailContainer>
              <Icon src={CareIcon} />
              <DiaryDetail>
                <DetailTitle>입원 여부</DetailTitle>
                <p>{formatDate(hospitalizationStatus, false)}</p>
              </DiaryDetail>
            </DiaryDetailContainer>
            <DiaryDetailContainer>
              <Icon src={CareIcon} />
              <DiaryDetail>
                <DetailTitle>보호자 메모</DetailTitle>
                <p>{memo}</p>
              </DiaryDetail>
            </DiaryDetailContainer>
          </DiaryDetailsLeft>
          <DiaryDetailsRight>
            <DiaryDetailContainer>
              <Icon src={CareIcon} />
              <DiaryDetail>
                <DetailTitle>처방</DetailTitle>
                <p>{treatment}</p>
              </DiaryDetail>
            </DiaryDetailContainer>
            <DiaryDetailContainer>
              <Icon src={CareIcon} />
              <DiaryDetail>
                <DetailTitle>동물병원</DetailTitle>
                <p>
                  {hospitalName} <span>{doctor} 선생님</span>
                </p>
              </DiaryDetail>
            </DiaryDetailContainer>
          </DiaryDetailsRight>
        </HealthReport>
      </DiariesContainer>
    </HealthDiaryContainer>
  );
};

export default HealthDiary;