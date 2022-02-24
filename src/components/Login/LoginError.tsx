import React from 'react';
import styled from 'styled-components';
import errorIcon from '../../assets/errorIcon.svg';

interface Props {
  message: string;
}

export const LoginError: React.FC<Props> = ({ message }) => {
  return (
    <Wrapper>
      <Icon src={errorIcon} />
      <Message>{message}</Message>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  max-width: 640px;
  height: 60px;
  width: 100%;
  background: #f5e9e9;
  border: 1px solid #e26f6f;
  border-radius: 8px;
  padding: 0 20px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Message = styled.span`
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;
