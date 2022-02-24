import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LoginCheckbox, LoginField } from '.';
import { useDispatch, useSelector } from '../../hooks';
import { login, setError } from '../../store/reducers/authSlice';
import { ILoginForm } from '../../types/auth';
import { loginValidationSchema } from '../../validators';
import { Button } from '../shared';

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, error } = useSelector(s => s.auth);
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ILoginForm>({
    defaultValues: {
      email: '',
      password: '',
      rememberPassword: false,
    },
    resolver: yupResolver(loginValidationSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<ILoginForm> = async data => {
    if (error) {
      dispatch(setError(null));
    }

    const { meta } = await dispatch(login(data));

    if (meta.requestStatus === 'fulfilled') {
      navigate('/profile');
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Fieldset>
        <LoginField
          autoFocus
          type='email'
          name='email'
          label='Логин'
          register={register}
          error={errors.email}
        />

        <LoginField
          type='password'
          name='password'
          label='Пароль'
          register={register}
          error={errors.password}
        />

        <RememberPassword>
          <LoginCheckbox
            type='checkbox'
            name='rememberPassword'
            register={register}
          />
          <label htmlFor='rememberPassword'>Запомнить пароль</label>
        </RememberPassword>
      </Fieldset>
      <Button type='submit' mode='submit' disabled={isLoading}>
        Войти
      </Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 640px;
  width: 100%;
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RememberPassword = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
