import Container from '../Container/Container';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Suspense } from 'react';
import Loader from 'components/Loader';

const Layout = () => {
  return (
    <div>
      <Container>
        <Sidebar />
        <Suspense fallback={<Loader />}>
        <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};

export default Layout;
