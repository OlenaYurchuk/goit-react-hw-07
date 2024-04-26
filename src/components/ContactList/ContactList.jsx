import Contact from '../Contact/Contact';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectContactsFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsOps';
import css from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const useFilteredContacts = () => {
    const contacts = useSelector(selectContacts);
    const filterName = useSelector(selectContactsFilter).toLowerCase().trim();

    const filteredContacts = useMemo(() => {
      return contacts.filter(item =>
        item.name.toLowerCase().trim().includes(filterName)
      );
    }, [contacts, filterName]);

    return filteredContacts;
  };

  const contacts = useFilteredContacts();

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  }
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  )
}