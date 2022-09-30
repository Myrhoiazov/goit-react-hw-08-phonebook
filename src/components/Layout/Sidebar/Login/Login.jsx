import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
import s from '../Login/Login.module.scss';

const Login = () => {
  const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.item} ${s.active}` : s.item;
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
          <NavLink end className={getActiveClassName} to="/">
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            HOME
          </NavLink>
          <NavLink to="/login" className={getActiveClassName}>
            Login
          </NavLink>
          <NavLink to="/registration" className={getActiveClassName}>
            Registration
          </NavLink>
      </Box>
    </>
  );
};

export default Login;
