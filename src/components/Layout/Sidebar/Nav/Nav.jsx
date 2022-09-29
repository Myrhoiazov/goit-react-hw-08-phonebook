import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import s from '../Nav/Nav.module.scss';
import UserMenu from 'components/UserMenu';

const Nav = () => {
  const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.item} ${s.active}` : s.item;
  };

  return (
    <div>
      <div className={s.nav}>
        <NavLink end className={getActiveClassName} to="/">
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          HOME
        </NavLink>
        <NavLink className={getActiveClassName} to="/contacts">
          <CallSharpIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          CONTACT
        </NavLink>
        <UserMenu />
      </div>
    </div>
  );
};

export default Nav;
