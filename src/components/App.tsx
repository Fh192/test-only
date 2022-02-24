import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from '../hooks';
import { LoginPage } from '../pages/LoginPage';
import { ProfilePage } from '../pages/ProfilePage';

export const App: React.FC = () => {
  const { isAuth } = useSelector(s => s.auth);

  return (
    <Wrapper>
      <Title>ONLY.</Title>
      <Container>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route
            path='/profile'
            element={isAuth ? <ProfilePage /> : <Navigate to='/login' />}
          />
          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 40px;
  min-height: 100vh;
  height: 100%;
  font-family: 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #1f1f1f;
  padding: 40px 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 64px;
  line-height: 78px;
  font-weight: bold;
  color: #000000;
  text-align: center;
`;
