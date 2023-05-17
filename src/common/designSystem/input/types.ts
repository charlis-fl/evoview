import { InputHTMLAttributes } from 'react';

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> & {
  labelText: string;
  id: string;
  error?: boolean;
  register?: any;
  placeholder: string;
  showPasswordRule?: boolean;
  name?: string;
  errorMessage?: string | undefined | any;
  value?: string;
  dataCy?: string;
  isDisabled?: boolean;
}
