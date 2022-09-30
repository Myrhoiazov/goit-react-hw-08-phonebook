import { Button } from '@mui/material';
import { token } from 'http/http';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAction } from 'redux/auth/auth.slice';
import UserProfile from './UserProfile';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logoutAction());
    token.unset();
    navigate('/', { replace: true });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center'}}>
      <UserProfile />
      <Button type="button" variant="contained" color="error" onClick={handleLogOut}>
        Log Out
      </Button>
    </div>
  );
};

export default UserMenu;
