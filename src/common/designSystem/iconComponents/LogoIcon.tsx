import logo from 'assets/images/logo/logo.png';

const LogoIcon = ({ width = '24px', height = '24px' }: { width: string; height: string;}) => (
  <img src={logo} alt="logo" style={{ width, height }} />
);
export default LogoIcon;
