import { ESLogo } from 'assets/images';
import { LogoType } from './types';

const LogoIcon = ({ width = '24px', height = '24px' }: LogoType) => (
  <img src={ESLogo} alt="logo" style={{ width, height }} />
);
export default LogoIcon;
