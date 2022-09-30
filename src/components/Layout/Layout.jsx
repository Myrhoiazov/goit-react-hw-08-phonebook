import Container from '../Container/Container';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div>
      <Container>
        <Sidebar />
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
