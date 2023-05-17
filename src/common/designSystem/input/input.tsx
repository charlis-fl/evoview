import { useEffect, useRef, useState } from 'react';
import { InputProps } from 'common/designSystem/input/types';
import { InputStyled } from './InputStyled';

const Input = (
  {
    name, value, labelText, id, register, dataCy, error, errorMessage, isDisabled, ...rest
  }: InputProps,
) => {
  const textErrorRef = useRef<HTMLInputElement>(null);
  const [heightOffset, setHeightOffset] = useState(false);
  useEffect(() => {
    if (textErrorRef && textErrorRef.current) {
      const height = textErrorRef.current.offsetHeight;
      if (height === 36) {
        setHeightOffset(true);
      } else {
        setHeightOffset(false);
      }
    }
  }, [errorMessage]);
  return (
    <InputStyled htmlFor={id} className={`${heightOffset ? 'date-type' : ''} ${error ? 'error' : ''}`}>
      <span dangerouslySetInnerHTML={{ __html: labelText }}></span>
      <div className="custom-input">
        <input
          id={id}
          {...register(name)}
          value={value}
          data-cy={dataCy}
          className={`${error ? 'error' : ''}`}
          disabled={isDisabled}
          {...rest}
        />
        { error && (
          <svg className="info-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2471_8103)">
              <path
                d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6819 14.6668 7.99998C14.6668
                4.31808 11.6821 1.33331 8.00016 1.33331C4.31826 1.33331 1.3335 4.31808 1.3335 7.99998C1.3335 11.6819 4.31826 14.6666 8.00016 14.6666Z"
                stroke="#E46843"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M8 5.33331V7.99998" stroke="#E46843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 10.6667H8.00667" stroke="#E46843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_2471_8103">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </div>
      { error && (
        <div data-cy={`error-${dataCy}`} ref={textErrorRef} className="text-error">{errorMessage && errorMessage}</div>
      )}
    </InputStyled>
  );
};

export default Input;
