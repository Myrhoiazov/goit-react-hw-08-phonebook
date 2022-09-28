import Breadcrumbs from '@mui/material/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import s from '../Nav/Nav.module.scss';


const Nav = () => {
  const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.item} ${s.active}` : s.item;
  };

  return (
    <div
    // role="presentation"
    // // onClick={handleClick}
    // sx={{ display: 'flex', alignItems: 'center' }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <NavLink end className={getActiveClassName} to="/">
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          HOME
        </NavLink>
        <NavLink className={getActiveClassName} to="/contacts">
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Contact
        </NavLink>
      </Breadcrumbs>
    </div>
  );
};

export default Nav;
