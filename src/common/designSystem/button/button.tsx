import { ButtonProps } from 'common/designSystem/button/types';
import { ButtonStyled } from './ButtonStyled';

export const Button = ({
  label,
  type = 'submit',
  isIcon = false,
  usage,
  iconImage,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled
      usage={usage}
      {...props}
      type={type}
    >
      {label}
      {isIcon && iconImage && (
        <span className="icon">
          <img src={iconImage} alt="icon" />
        </span>
      )}
    </ButtonStyled>
  );
};

export default Button;
