import { useEffect, useRef, useState } from 'react';
import { Menu } from '@headlessui/react';
import { DropdownProps } from 'common/designSystem/dropdown/types';
import { DropdownStyled } from './DropdownStyled';

const Dropdown = (
  {
    name, labelText, id, register, options, dataCy, error, errorMessage, onSelect, value, placeholder, checkBasedonDisplayedValue, startingIcon,
    shortDropdown,
  }: DropdownProps,
) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedValue, setSelectedValue] = useState('');
  const textErrorRef = useRef<HTMLInputElement>(null);
  const [heightOffset, setHeightOffset] = useState(false);
  const [isExpandedOpen, setIsExpandedOpen] = useState(false);
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

  useEffect(() => {
    if (isExpandedOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.addEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (options.length > 0) {
      if (checkBasedonDisplayedValue) {
        const initialValue = options.find((o) => o.displayValue === value);
        setSelectedOption({ value: initialValue ? initialValue.value : 0, displayValue: initialValue ? initialValue.displayValue : '' });
        return;
      }
      const initialValue = options.find((o) => o.value === value);
      setSelectedOption({ value: initialValue ? initialValue.value : 0, displayValue: initialValue ? initialValue.displayValue : '' });
    }
  }, [options, value]);
  useEffect(() => {
    if (selectedOption) {
      setSelectedValue(selectedOption.displayValue);
    }
  }, [selectedOption]);

  const handleClickOutside = (event: any) => {
    if (isExpandedOpen && event.target.className.includes('custom-item')) {
      setIsExpandedOpen(false);
    }
  };

  return (
    <DropdownStyled startingIcon={startingIcon || ''} htmlFor={id} className={`${heightOffset ? 'date-type' : ''} ${error ? 'error' : ''}`} shortDropdown={shortDropdown || false}>
      <span dangerouslySetInnerHTML={{ __html: labelText }}></span>
      <Menu>
        {({ open }) => {
          useEffect(() => {
            setIsExpandedOpen(open);
          }, [open]);
          return (
            <div className="custom-input">
              {startingIcon && (
                <div className="starting-icon">
                  <img src={startingIcon} alt="icon" />
                </div>
              )}
              <Menu.Button
                data-cy={dataCy}
                {...register(name)}
                className="drop-button"
              >
                <input
                  id={id}
                  readOnly
                  defaultValue={selectedValue}
                  className={`${open ? 'active' : ''} ${error ? 'error' : ''}`}
                  placeholder={placeholder}
                />
              </Menu.Button>
              <div className="drop-icon">
                {!open && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="#3C3434" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {open && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 10L8 6L4 10" stroke="#1E1E32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              {isExpandedOpen && (
                <Menu.Items className="custom-menu-items" static>
                  {options.length > 0 && options.map((option) => {
                    return (
                      <Menu.Item key={option.value}>
                        {({ active }) => (
                          <button
                            type="button"
                            className={`custom-item ${active ? 'active' : ''} ${options.find((o) => o.displayValue === value)
                            && option.displayValue === value ? 'highlighted-item' : ''} `}
                            onClick={() => {
                              setSelectedOption(option);
                              onSelect(option);
                            }}
                          >
                            {option.displayValue}
                          </button>
                        )}
                      </Menu.Item>
                    );
                  })}
                </Menu.Items>
              )}
            </div>
          );
        }}
      </Menu>
      { error && (
        <div className="text-error" data-cy={`error-${dataCy}`}>{errorMessage && errorMessage}</div>
      )}
    </DropdownStyled>
  );
};

export default Dropdown;
