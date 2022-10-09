import { Button } from '@mui/material';
// import Loader from 'components/Loader';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/thunk.auth';
import s from './Login.module.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const initialValue = {
    email: '',
    password: '',
  };

  const [user, setUser] = useState(initialValue);

  const handleChangeUser = ev => {
    const { name, value } = ev.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async ev => {
    ev.preventDefault();

    try {
      await dispatch(loginThunk(user)).unwrap();
      setUser(initialValue);
      // navigate('/', { replace: true });
    } catch (error) {
      toast.error('Try Again');
    }
  };

  return (
    <div className={s.wrapper}>
      {/* {isLoader && <Loader />} */}
      <form className={s.form} onSubmit={handleSubmit}>
        <label>
          <span className={s.label}>Email</span>
          <input
            placeholder="your@email.com"
            className={s.input}
            type="email"
            name="email"
            value={user.email}
            required
            onChange={handleChangeUser}
          />
        </label>
        <label>
          <span className={s.label}>Password</span>
          <input
          placeholder="......."
            className={s.input}
            type="password"
            name="password"
            value={user.password}
            required
            onChange={handleChangeUser}
          />
        </label>
        <Link className={s.link} to="/registration">
          Dont have account?
        </Link>

        <Button
          disabled={user.email && user.password ? false : true}
          variant="contained"
          type="submit"
        >
          Log In
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
