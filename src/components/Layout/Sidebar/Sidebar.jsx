import { useSelector } from 'react-redux';
import Login from './Login';
import Nav from './Nav';

const Sidebar = () => {
  const status = useSelector(state => state.auth.status);
  return (
    <div>
      <div>{status ? <Nav /> : <Login />}</div>
    </div>
  );
};

export default Sidebar;
