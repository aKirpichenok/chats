import { ButtonHTMLAttributes } from 'react';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'outlined' | 'contained' | 'default';
type ButtonColor = 'secondary' | 'primary' | 'default';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  children?: string | JSX.Element;
}
