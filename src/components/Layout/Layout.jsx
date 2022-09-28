import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
