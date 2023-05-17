import { ButtonProps } from 'common/designSystem/colorButton/types';
import { ButtonStyled } from './ButtonStyled';

export const ColorButton = ({
  label,
  type = 'submit',
  backgroundColor = 'var(--default-interface-gray-400)',
  color = 'var(--default-interface-navy-400)',
  hoverColor = 'var(--default-interface-gray-500)',
  border = 'none',
  isIcon = false,
  iconImage,
  opacity,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled
      {...props}
      type={type}
      hoverColor={hoverColor}
      backgroundColor={backgroundColor}
      color={color}
      style={{ border, opacity }}
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

export default ColorButton;
