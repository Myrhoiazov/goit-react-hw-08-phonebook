// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import s from '../Contacts/ContactList.module.css';
import { useEffect, useMemo } from 'react';
import { fetchAllContact } from '../../redux/contacts/operations-contact';
import { selectContact } from 'redux/contacts/selector-contacts';
import { deleteContact } from '../../redux/contacts/operations-contact';
import Button from '@mui/material/Button';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import DeleteIcon from '@mui/icons-material/Delete';
import { selectAuth } from 'redux/auth/selector.auth';

const ContactList = () => {
  const contacts = useSelector(selectContact);
  const filter = useSelector(state => state.contacts.filter);
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
      <ul className={s.list}>
        {filteredContacts.map(({ name, number, id }) => (
          <li className={s.item} key={id}>
            <p className= {s.text}> <ContactPhoneIcon sx={{ fontSize: 20, marginRight: 1 }}/>
              {name} <span className={s.tel}>Tel: {number}</span>
            </p>
            <Button
              variant="contained"
              startIcon={<DeleteIcon />}
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
