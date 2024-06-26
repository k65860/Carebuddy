import React from 'react';
import styled from 'styled-components';

interface InputProps {
  fontSize?: keyof typeof fontSizeMap;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  color?: string;
  placeholder?: string;
  type?: string;
  name?: string; // 추가된 부분
  value?: string | null; // 추가된 부분
  defaultValue?: string | null;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // 추가된 부분
  preventClick?: boolean; // preventClick 속성 추가
}

const fontSizeMap = {
  'sm-1': 'var(--font-size-sm-1)', // 12
  'ft-1': 'var(--font-size-ft-1)', // 14
  'md-1': 'var(--font-size-md-1)', // 16
  'md-2': 'var(--font-size-md-2)', // 18
  'hd-1': 'var(--font-size-hd-1)', // 20
  'hd-2': 'var(--font-size-hd-2)', // 22
  'lg-1': 'var(--font-size-lg-1)', // 26
  'lg-2': 'var(--font-size-lg-2)', // 32
};

const InputBoxElement = styled.input<InputProps>`
  font-family: 'Pretendard-Regular', sans-serif;
  font-size: ${(props) =>
    props.fontSize
      ? fontSizeMap[props.fontSize]
      : 'var(--font-size-ft-1)'}; //14
  border: 1px solid var(--color-grey-2); // 항상
  border-radius: 4px;
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '5px'};
  width: ${(props) => props.width || '300px'};
  height: ${(props) => props.height || '30px'};
  color: ${(props) => props.color || 'var(--color-black)'};
  outline: none;

  ${(props) => //클릭 비활성화
    props.preventClick &&
    `
      cursor: default; 
      background-color: #f2f2f2; 
    `}
  `

const InputBox: React.FC<InputProps> = ({
  fontSize,
  margin,
  padding,
  width,
  height,
  color,
  placeholder,
  type,
  name,
  value,
  defaultValue,
  onChange,
  preventClick,
}) => {
  return (
    <InputBoxElement
      fontSize={fontSize}
      margin={margin}
      padding={padding}
      width={width}
      height={height}
      color={color}
      placeholder={placeholder}
      type={type}
      name={name}
      defaultValue={defaultValue}
      value={value} // 입력값을 value로 전달
      onChange={onChange} // onChange 함수를 props로 받음
      preventClick={preventClick} 

    />
  );
};

export default InputBox;
