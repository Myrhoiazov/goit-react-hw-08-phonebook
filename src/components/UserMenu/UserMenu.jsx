import { Button } from '@mui/material';
import { token } from 'http/http';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAction } from 'redux/auth/auth.slice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { data, status } = useSelector(state => state.profile);

  const handleLogOut = () => {
    dispatch(logoutAction());
    token.unset();
    navigate('/', { replace: true });
  };

  return (
    <div style={{ display: 'flex' }}>
      <p>User</p>
      <Button type="button" onClick={handleLogOut}>
        {' '}
        Log Out
      </Button>
    </div>
  );
};

export default UserMenu;
