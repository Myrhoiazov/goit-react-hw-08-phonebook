import { useSelector } from 'react-redux';
import Login from './Login';
import Nav from './Nav';
import s from './Sidebar.module.scss'

const Sidebar = () => {
  const status = useSelector(state => state.auth.status);
  return (
    <div className={s.wrapper}>
      <div>{status ? <Nav /> : <Login />}</div>
    </div>
  );
};

export default Sidebar;
