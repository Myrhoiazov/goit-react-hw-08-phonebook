import FilterList from '../../components/Filter/FilterList';
import Container from '../../components/Container/Container';
import ContactList from 'components/Contacts/ContactList';
import Form from '../../components/Form/Form';

const ContactPage = () => {
  return (
    <>
      <Container>
        <Form />
        <FilterList />
        <ContactList />
      </Container>
    </>
  );
};

export default ContactPage;
