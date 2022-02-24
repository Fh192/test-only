import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import { ILoginForm } from '../../types/auth';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: Path<ILoginForm>;
  register: UseFormRegister<ILoginForm>;
}

export const LoginCheckbox: React.FC<Props> = ({ register, name, ...props }) => {
  return (
    <Container>
      <Input type='checkbox' {...register(name)} {...props} />
    </Container>
  );
};

const Container = styled.label`
  position: relative;
  width: 20px;
  height: 20px;
  border: 1px solid #000000;
  border-radius: 4px;
  cursor: pointer;
`;

const Input = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 2px;
  width: 14px;
  height: 14px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:checked {
    background: #4a67ff;
  }
`;
