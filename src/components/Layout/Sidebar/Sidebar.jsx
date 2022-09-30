import { useSelector } from 'react-redux';
import Toolbar from '@mui/material/Toolbar';
import Login from './Login';
import Nav from './Nav';

const Sidebar = () => {
  const status = useSelector(state => state.auth.status);
  return (
    <Toolbar>
      <div>{status ? <Nav /> : <Login />}</div>
    </Toolbar>
  );
};

export default Sidebar;
