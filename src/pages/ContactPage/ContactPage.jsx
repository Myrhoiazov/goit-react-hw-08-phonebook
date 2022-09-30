import FilterList from '../../components/Filter/FilterList';
import ContactList from 'components/Contacts/ContactList';
import Form from '../../components/Form/Form';
import s from './ContactPage.module.scss'

const ContactPage = () => {
  return (
    <>
      <div className={s.wrapper}>
        <Form />
        <FilterList />
        <ContactList />
      </div>
    </>
  );
};

export default ContactPage;
