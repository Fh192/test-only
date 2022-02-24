import React from 'react';
import { FieldError, Path, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import { ILoginForm } from '../../types/auth';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: Path<ILoginForm>;
  error?: FieldError;
  register: UseFormRegister<ILoginForm>;
}

export const LoginField: React.FC<Props> = ({
  register,
  error,
  label,
  name,
  ...props
}) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <Input error={!!error} {...register(name)} {...props} />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input<{ error: boolean }>`
  max-width: 640px;
  width: 100%;
  height: 60px;
  background: #f5f5f5;
  padding: 0px 20px;
  border: ${({ error }) => `1px solid ${error ? '#e26f6f' : 'transparent'}`};
  caret-color: ${({ error }) => (error ? '#e26f6f' : 'auto')};
  border-radius: 8px;
  transition: border 0.3s ease;
`;

const ErrorMessage = styled.span`
  font-size: 14px;
  line-height: 17px;
  color: #e26f6f;
`;
