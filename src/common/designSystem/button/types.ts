import { ButtonHTMLAttributes } from 'react';

export interface StyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  usage?: string;
}

export type ButtonType = 'button' | 'submit';
export type ButtonUsage= 'primary' | 'link' | 'custom' | 'border-less';

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  label: string;
  isIcon?: boolean;
  type?: ButtonType;
  usage?: ButtonUsage;
  iconImage?: string;
}
