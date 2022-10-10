import { useState } from 'react';
import s from './Registration.module.css';
// import Loader from 'components/Loader';
import Button from '@mui/material/Button';
import { createUserService } from 'services/usersApi';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { toast } from 'react-toastify';
import { loginThunk } from 'redux/auth/thunk.auth';
import { useDispatch } from 'react-redux';
import { omit } from 'lodash';
import { Link, useNavigate } from 'react-router-dom';
import Loader from 'components/Loader';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValue = {
    name: '',
    email: '',
    password: '',
  };

  const [user, setUser] = useState(initialValue);
  const [isLoader, setIsLoader] = useState(false);
  const [isType, setIsType] = useState(false);

  const handleChangeUser = ev => {
    const { name, value } = ev.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = ev => {
    ev.preventDefault();

    setIsLoader(true);
    createUserService(user)
      .then(() => {
        toast.success('Success');
        setIsLoader(false);
        dispatch(loginThunk(omit(user, 'name'))).unwrap();
        setUser(initialValue);
      })
      .then(() => navigate('/', { replace: true }))
      .catch(() => toast.error('warning'));
  };

  return (
    <div className={s.wrapper}>
      {isLoader && <Loader />}
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label__text}>
          <span className={s.label}>Name</span>
          <input
            placeholder="Ivan Ivanov"
            className={s.input}
            type="text"
            value={user.name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChangeUser}
          />
        </label>
        <label className={s.label__text}>
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
        <label className={s.label__text}>
          <span className={s.label}>Password</span>
          <input
            placeholder="......"
            className={s.input}
            type={isType ? 'text' : 'password'}
            name="password"
            value={user.password}
            required
            onChange={handleChangeUser}
          />
          {isType ? (
            <VisibilityOffIcon
              sx={{ fontSize: 20 }}
              className={s.icon}
              onClick={() => setIsType(!isType)}
            />
          ) : (
            <VisibilityIcon
              sx={{ fontSize: 20 }}
              className={s.icon}
              onClick={() => setIsType(!isType)}
            />
          )}
        </label>
        <Link className={s.link} to="/login">
          Already has account?
        </Link>

        <Button
          disabled={user.name && user.password && user.email ? false : true}
          variant="contained"
          type="submit"
        >
          Registration
        </Button>
      </form>
    </div>
  );
};

export default Registration;
