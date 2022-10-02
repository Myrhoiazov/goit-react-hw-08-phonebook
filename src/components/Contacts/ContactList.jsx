// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import s from '../Contacts/ContactList.module.css';
import { useEffect, useMemo } from 'react';
import { fetchAllContact } from '../../redux/contacts/operations-contact';
import { selectContact } from 'redux/contacts/selector-contacts';
import { deleteContact } from '../../redux/contacts/operations-contact';
import Loader from 'components/Loader';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { selectAuth } from 'redux/auth/selector.auth';

const ContactList = () => {
  const contacts = useSelector(selectContact);
  const filter = useSelector(state => state.contacts.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  const status = useSelector(selectAuth);

  useEffect(() => {
    if (status) {
      dispatch(fetchAllContact());
    }
  }, [dispatch, status]);


// useMemo - кеширует данные повторно не рендерит
  const filteredContacts = useMemo(() => {
    return contacts.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);


  if (contacts.length === 0) {
    return;
  }

  return (
    <div className={s.wrapper}>
      {isLoading && <Loader />}
      <ul className={s.list}>
        {filteredContacts.map(({ name, number, id }) => (
          <li className={s.item} key={id}>
            <p className={s.text}>
              {name} <span className={s.tel}>Tel: {number}</span>
            </p>
            <Button
              variant="contained"
              startIcon={<DeleteIcon />}
              disabled={isLoading ? true : false}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       userName: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func,
// };

export default ContactList;
