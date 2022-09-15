import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { ContactsContainer } from './ContactsPage.styled';
import { Helmet } from 'react-helmet';

const ContactsPage = () => {
  return (
    <ContactsContainer>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <ContactForm />

      <Filter />
      <ContactList />
    </ContactsContainer>
  );
};

export default ContactsPage;
