import React from 'react';
import styled from 'styled-components';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: 'default' | 'submit';
  width?: string;
}

export const Button: React.FC<Props> = ({
  mode = 'default',
  width = '100%',
  children,
  ...props
}) => {
  const textColor = mode === 'submit' ? '#FFFFFF' : '#000000';
  const bgColor = mode === 'submit' ? '#4A67FF' : '#F5F5F5';

  return (
    <StyledButton
      width={width}
      textColor={textColor}
      bgColor={bgColor}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  width: string;
  textColor: string;
  bgColor: string;
}>`
  width: ${({ width }) => width};
  height: 60px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  transition: opacity 0.3s ease;
  background: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;
