import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
import s from '../Login/Login.module.scss';

const Login = () => {
  const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.item} ${s.active}` : s.item;
  };

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.home}>
          <NavLink end className={getActiveClassName} to="/">
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            HOME
          </NavLink>
        </div>

        <div className={s.login}>
          <NavLink to="/login" className={getActiveClassName}>
            Login
          </NavLink>
          <NavLink to="/registration" className={getActiveClassName}>
            Registration
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Login;
