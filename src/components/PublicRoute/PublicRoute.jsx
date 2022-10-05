import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { selectAuth } from '../../redux/auth/selector.auth';

const PublicRoute = () => {
  const { token } = useSelector(selectAuth);

  return token ? <Navigate to="/" /> : <Outlet/> ;
};

export default PublicRoute;
