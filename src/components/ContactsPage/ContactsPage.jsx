
import s from './Contacts.module.css';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { Toaster } from 'react-hot-toast';
const ContactsPage = () => {
  return (
    <div className={s.container}>
    <h1 className={s.main}>My Contacts</h1>
    <SearchBox />
    <ContactList />
    <Toaster position="top-right" />
    <ContactForm />
    </div>

  )
}

export default ContactsPage;
