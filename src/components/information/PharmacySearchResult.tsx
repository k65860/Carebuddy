import React from 'react';
import styled from 'styled-components';
import { LuMapPin } from 'react-icons/lu';
import TableList from '../baseComponent/Table';

// 데이터에 괄호가 있는 경우, 없애줌
function removeParentheses(text: string) {
  if (text && typeof text === 'string') {
    return text.replace(/\s*\([^)]*\)/g, '').trim();
  }
  return text;
}

// 동물 병원 앞 세 단어만 split: 일반적으로 ~~동, ~~길 까지 끊어져서 return
function removeFirstThreeWords(text: string) {
  if (text && typeof text === 'string') {
    const words = text.split(' ');
    return words.slice(0, 3).join(' ');
  }
  return text;
}
type PharmacyData = {
  address: string;
  name: string;
  telephone: string;
};

const PharmacyResult: React.FC<{ data: PharmacyData[] }> = ({ data }) => {
  const headersList = ['위치', '약국명', '전화번호'];
  return (
    <TableList
      headers={headersList}
      data={data.map((item) => ({
        위치:
          removeFirstThreeWords(item.address) ||
          '제공되는 위치 정보가 없습니다',
        약국명: removeParentheses(item.name),
        전화번호: item.telephone || '-',
      }))}
    />
  );
};

export default PharmacyResult;
