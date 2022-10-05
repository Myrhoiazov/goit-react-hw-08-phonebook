import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { selectAuth } from '../../redux/auth/selector.auth';

const PrivatRoute = () => {
  const { token } = useSelector(selectAuth);

  return token ? <Outlet/> : <Navigate to="/login" />;
};

export default PrivatRoute;
