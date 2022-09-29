import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contacts/operations-contact';
import s from './Registration.module.css';
// import { toast } from 'react-toastify';
// import { selectContact } from 'redux/contacts/selector-contacts';
// import Loader from 'components/Loader';
import Button from '@mui/material/Button';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const dispatch = useDispatch();
  // const contacts = useSelector(selectContact);
  // const isLoading = useSelector(state => state.contacts.isLoading);

  // const handleChangeUser = ev => {
  //   const { name, value } = ev.target;

  //   switch (name) {
  //     case 'name':
  //       setUserName(value);
  //       // eslint-disable-next-line
  //       break;

  //     case 'number':
  //       setNumber(value);
  //       // eslint-disable-next-line
  //       break;

  //     default:
  //       return;
  //   }
  // };

  // const handleAddUser = e => {
  //   e.preventDefault();

  //   const hasUserContacts = contacts.some(user => user.name === name);

  //   if (hasUserContacts) {
  //     toast.warning(`${name} is already in contacts`);
  //     return;
  //   }

  //   dispatch(addContact({ name, number }));
  //   setNumber('');
  //   setUserName('');
  // };

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <form className={s.form} onSubmit={console.log()}>
        <label>
          <span className={s.label}>Name</span>
          <input
            className={s.input}
            type="text"
            // value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // onChange={handleChangeUser}
          />
        </label>
        <label>
          <span className={s.label}>Email</span>
          <input
            className={s.input}
            type="email"
            name="number"
            // value={number}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            // onChange={handleChangeUser}
          />
        </label>
        <label>
          <span className={s.label}>Password</span>
          <input
            className={s.input}
            type="password"
            name="password"
            // value={number}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            // onChange={handleChangeUser}
          />
        </label>

        <Button
          disabled={name && email && password ? false : true}
          variant="contained"
          type="submit"
        >
          Registration
        </Button>
      </form>
    </>
  );
};

export default Registration;
