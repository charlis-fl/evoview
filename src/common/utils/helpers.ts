const camelToSnakeCase = (propertyName: string) => propertyName
  .replace(
    /[A-Z]/g,
    (letter) => `_${letter.toLowerCase()}`,
  );

const snakeToCamelCase = (propertyName: string) => propertyName
  .toLowerCase()
  .replace(/([-_][a-z])/g, (group) => group
    .toUpperCase()
    .replace('-', '')
    .replace('_', ''));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseObjectPropertiesToSnakeCase = (object: any): any => {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        return [camelToSnakeCase(key), value];
      }
      const parsedNestedObject = parseObjectPropertiesToSnakeCase(value);
      return [camelToSnakeCase(key), parsedNestedObject];
    }),
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseObjectPropertiesToCamelCase = (object: any): any => {
  if (!object) {
    return;
  }
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        return [snakeToCamelCase(key), value];
      }
      const parsedNestedObject = parseObjectPropertiesToCamelCase(value);
      return [snakeToCamelCase(key), parsedNestedObject];
    }),
  );
};

export const convert = (number: string | number) => {
  let n = number;
  n = String(n);
  if (n.length === 1) {
    n = `0${n}`;
  }
  return n;
};

export const leapYear = (year: number) => {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
};

export const checkIfValidDay = (day: number, month: number, year: number) => {
  if ((month === 1)
    || (month === 3)
    || (month === 5)
    || (month === 7)
    || (month === 8)
    || (month === 10)
    || (month === 12)) {
    if (day <= 31) {
      return true;
    }
  } else if (month === 2) {
    if (leapYear(year)) {
      if (day <= 29) return true;
    } else if (day <= 28) return true;
  } else if (day <= 30) {
    return true;
  } else {
    return false;
  }
};

export const checkThirteenOverYearOld = (birthDateString:string) => {
  const today = new Date();
  const birthDate = new Date(birthDateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age -= age - 1;
  }
  return age;
};

export const capitalizeFirstLetter = (string:string) => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return '';
};

export const getColorFromCategoryFavorite = (categoryId: number) => {
  let buttonColor = '';
  let fontColor = '';
  let hoverColor = '';
  let backgroundHoverColor = '';
  switch (categoryId) {
    case 1:
      backgroundHoverColor = 'var(--default-interface-pistachio-100)';
      buttonColor = 'var(--default-interface-pistachio-300)';
      hoverColor = 'var(--default-interface-pistachio-500)';
      fontColor = 'var(--default-interface-pistachio-700)';
      break;
    case 2:
      backgroundHoverColor = 'var(--default-interface-apricot-100)';
      buttonColor = 'var(--default-interface-apricot-300)';
      hoverColor = 'var(--default-interface-apricot-500)';
      fontColor = 'var(--default-interface-apricot-700)';
      break;
    case 3:
      backgroundHoverColor = 'var(--default-interface-sky-100)';
      buttonColor = 'var(--default-interface-sky-400)';
      hoverColor = 'var(--default-interface-sky-400)';
      fontColor = 'var(--default-interface-sky-700)';
      break;
    default:
      backgroundHoverColor = 'var(--default-interface-sky-100)';
      buttonColor = 'var(--default-interface-sky-400)';
      hoverColor = 'var(--default-interface-sky-500)';
      fontColor = 'var(--default-interface-sky-700)';
      break;
  }
  return {
    buttonColor,
    fontColor,
    hoverColor,
    backgroundHoverColor,
  };
};

export const getColorFromCategory = (categoryId: number) => {
  let buttonColor = '';
  let fontColor = '';
  let hoverColor = '';
  let backgroundHoverColor = '';
  switch (categoryId) {
    case 1:
      backgroundHoverColor = 'var(--default-interface-apricot-100)';
      buttonColor = 'var(--default-interface-apricot-300)';
      hoverColor = 'var(--default-interface-apricot-500)';
      fontColor = 'var(--default-interface-apricot-700)';
      break;
    case 2:
      backgroundHoverColor = 'var(--default-interface-pistachio-100)';
      buttonColor = 'var(--default-interface-pistachio-300)';
      hoverColor = 'var(--default-interface-pistachio-500)';
      fontColor = 'var(--default-interface-pistachio-700)';
      break;
    case 3:
      backgroundHoverColor = 'var(--default-interface-mint-100)';
      buttonColor = 'var(--default-interface-mint-300)';
      hoverColor = 'var(--default-interface-mint-500)';
      fontColor = 'var(--default-interface-mint-700)';
      break;
    case 4:
      backgroundHoverColor = 'var(--default-interface-sky-100)';
      buttonColor = 'var(--default-interface-sky-400)';
      hoverColor = 'var(--default-interface-sky-400)';
      fontColor = 'var(--default-interface-sky-700)';
      break;
    case 5:
      backgroundHoverColor = 'var(--default-interface-gray-100)';
      buttonColor = 'var(--default-interface-gray-400)';
      hoverColor = 'var(--default-interface-gray-500)';
      fontColor = 'var(--default-interface-gray-700)';
      break;
      break;
    case 6:
      backgroundHoverColor = 'var(--default-interface-sky-100)';
      buttonColor = 'var(--default-interface-sky-400)';
      hoverColor = 'var(--default-interface-sky-500)';
      fontColor = 'var(--default-interface-sky-700)';
      break;
    default:
      backgroundHoverColor = 'var(--default-interface-sky-100)';
      buttonColor = 'var(--default-interface-sky-400)';
      hoverColor = 'var(--default-interface-sky-500)';
      fontColor = 'var(--default-interface-sky-700)';
      break;
  }
  return {
    buttonColor,
    fontColor,
    hoverColor,
    backgroundHoverColor,
  };
};

export const getValueInsideBracket = (str: string) => {
  if (!str) {
    return '';
  }
  const isStringHaveBrackets = str.match(/(.*)\(.*\)/);
  if (isStringHaveBrackets) {
    const val = str.match(/\(([^)]+)\)?(){1}$/);
    if (val && val[1]) {
      return val[1];
    }
    return '';
  }
};
