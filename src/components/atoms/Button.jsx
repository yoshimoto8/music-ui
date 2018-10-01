//@flow
import React from 'react';
import styled from 'styled-components';

import StyledText from './Text';

const StyledButton = styled.button`
  background-color: #1db954;
  border-radius: 25px;
  color: #ffffff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => (props.height ? props.height : 30)}px;
  width: ${props => (props.width ? props.width : 70)}px;
`;

type Props = {|
  +label: string,
  +width?: number,
  +height?: number,
  +onClick?: () => void,
|};

const Button = ({ label, width, height, onClick }: Props) => {
  return (
    <StyledButton width={width} height={height} onClick={() => onClick}>
      <StyledText>{label}</StyledText>
    </StyledButton>
  );
};

export default Button;
