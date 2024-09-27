// Hooks
import useTheme from '@/hooks/useTheme';

// Components
import AdditionButtons from './Components/AdditionButtons';
import UserDropdown from './Components/UserDropdown';

// Assets
import logo from '~/images/global/logo2.png';

const Navbar: RC = () => {
  const theme = useTheme();
  const navbarTheme = theme.dashboard.components.navbar;

  return (
    <nav className={navbarTheme.base}>
      <div className={navbarTheme.logo_side.base}>
        <img
          className={navbarTheme.logo_side.logo}
          src={logo}
        />
      </div>
      <div className={navbarTheme.buttons_side.base}>
        <AdditionButtons />
        <UserDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
