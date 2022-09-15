import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { ContactsContainer } from './ContactsPage.styled';

const ContactsPage = () => {
  return (
    <ContactsContainer>
          <ContactForm />
      <Filter />
      <ContactList />
    </ContactsContainer>
  );
};

export default ContactsPage;
