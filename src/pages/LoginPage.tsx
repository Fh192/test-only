import React from 'react';
import styled from 'styled-components';
import { LoginError, LoginForm } from '../components/Login';
import { useSelector } from '../hooks';

export const LoginPage: React.FC = () => {
  const { error } = useSelector(s => s.auth);

  return (
    <Wrapper>
      {error && <LoginError message={error} />}
      <LoginForm />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 27px;
  width: 100%;
  height: 100%;
`;
