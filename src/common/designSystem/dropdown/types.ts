import { InputHTMLAttributes } from 'react';

export type OptionType = {
  value: string | number;
  displayValue: string;
}

export type DropdownProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> & {
  labelText: string;
  id: string;
  error?: boolean;
  options: Array<OptionType>;
  register?: any;
  onSelect: any;
  placeholder: string;
  name?: string;
  errorMessage?: string | any;
  value?: string;
  dataCy?: string;
  checkBasedonDisplayedValue?:boolean
  isIcon?: boolean;
  iconImage?: string;
  startingIcon?: string;
  shortDropdown?:boolean;
}
