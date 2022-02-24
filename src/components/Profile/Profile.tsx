import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from '../../hooks';
import { logout } from '../../store/reducers/authSlice';
import { Button } from '../shared';

export const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, email } = useSelector(s => s.auth);

  const onLogout = async () => {
    await dispatch(logout());
    navigate('/login');
  };

  return (
    <>
      <Greeting>
        Здравствуйте, <Name>{email}</Name>
      </Greeting>
      <Button
        mode='default'
        width='200px'
        disabled={isLoading}
        onClick={onLogout}
      >
        Выйти
      </Button>
    </>
  );
};

const Greeting = styled.span`
  text-align: center;
  line-break: anywhere;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
`;

const Name = styled.b`
  font-weight: bold;
`;
