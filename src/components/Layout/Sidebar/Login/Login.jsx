import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';
import s from '../Login/Login.module.scss';

const Login = () => {
  const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.item} ${s.active}` : s.item;
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <NavLink to="/login" className={getActiveClassName}>
            Login
          </NavLink>
          <NavLink to="/registration" className={getActiveClassName}>
            Registration
          </NavLink>
        </Toolbar>
      </Box>
    </>
  );
};

export default Login;
