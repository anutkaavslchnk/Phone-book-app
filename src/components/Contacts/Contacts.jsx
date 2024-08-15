
import s from './Contacts.module.css';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
const Contacts = () => {
  return (
    <div className={s.container}>
    <h1 className={s.main}>My Contacts</h1>
    <SearchBox />
    <ContactList />
    <ContactForm />
    </div>

  )
}

export default Contacts;
