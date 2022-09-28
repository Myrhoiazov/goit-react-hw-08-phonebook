import Container  from '../Container/Container';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <>
      <Container>
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </Container>
    </>
  );
};

export default Layout;
