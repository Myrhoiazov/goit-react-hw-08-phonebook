import { useState } from 'react';
import s from './Registration.module.css';
// import Loader from 'components/Loader';
import Button from '@mui/material/Button';
import { createUserService } from 'services/usersApi';
import { toast } from 'react-toastify';
import { loginThunk } from 'redux/auth/thunk.auth';
import { useDispatch } from 'react-redux';
import { omit } from 'lodash';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValue = {
    name: '',
    email: '',
    password: '',
  };

  const [user, setUser] = useState(initialValue);
  // const [isLoader, setIsLoader] = useState(false);

  const handleChangeUser = ev => {
    const { name, value } = ev.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = ev => {
    ev.preventDefault();

    createUserService(user)
      .then(() => {
        toast.success('Success');
        dispatch(loginThunk(omit(user, 'name'))).unwrap();
        setUser(initialValue);
      })
      .then(() => navigate('/', { replace: true }))
      .catch(() => toast.error('warning'));
  };

  return (
    <>
      {/* {isLoader && <Loader />} */}
      <form className={s.form} onSubmit={handleSubmit}>
        <label>
          <span className={s.label}>Name</span>
          <input
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
        <label>
          <span className={s.label}>Email</span>
          <input
            className={s.input}
            type="email"
            name="email"
            value={user.email}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChangeUser}
          />
        </label>
        <label>
          <span className={s.label}>Password</span>
          <input
            className={s.input}
            type="password"
            name="password"
            value={user.password}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChangeUser}
          />
        </label>

        <Button disabled={false} variant="contained" type="submit">
          Registration
        </Button>
      </form>
    </>
  );
};

export default Registration;
