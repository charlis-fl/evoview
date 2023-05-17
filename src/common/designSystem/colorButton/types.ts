import { ButtonHTMLAttributes } from 'react';

export type ButtonType = 'button' | 'submit';
export interface StyledColorButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hoverColor?: string;
  backgroundColor?: string;
  color?: string;
}

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  label: string;
  type?: ButtonType;
  isIcon?: boolean;
  backgroundColor?: string;
  color?: string;
  hoverColor?: string;
  iconImage?: string;
  border?: string;
  opacity?:string;
}
