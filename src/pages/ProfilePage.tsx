import React from 'react';
import styled from 'styled-components';
import { Profile } from '../components/Profile/Profile';

export const ProfilePage: React.FC = () => {
  return (
    <Wrapper>
      <Profile />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
