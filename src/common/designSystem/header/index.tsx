import { Link } from 'react-router-dom';
import logo from 'assets/images/logo/logo.svg';
import { HeaderStyled } from './Styled';

const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/">
        <div className="clickable">
          <span className="logo">
            <img src={logo} alt="evo-view" />
          </span>
          <span className="brand-name">EvoView</span>
        </div>
      </Link>
    </HeaderStyled>
  );
};

export default Header;
