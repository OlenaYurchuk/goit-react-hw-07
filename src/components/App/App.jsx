import ContactForm from '../ContactForm/ContactForm'
import SearchBar from '../SearchBar/SearchBar'
import ContactList from '../ContactList/ContactList'
import Layout from '../Layout/Layout'
import { useSelector } from 'react-redux'
import css from '../App/App.module.css'
import { useEffect, useState } from 'react'
import { fetchContacts } from '../../data/contacts-api'

function App() {
  const [contacts, setContacts] = useState([]);
  const users = useSelector(state => state.contacts.items);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsData = await fetchContacts();
        console.log(contactsData)
        setContacts(contactsData);
      } catch (error) {
        console.log('Error:', error)
      }
    }
    getContacts();
  }, [])
  return (
    <Layout>
      <section className={css.phonebook}>
        <div className={css.container}>
          <h1>Phonebook</h1>
          <ContactForm />
        </div>
        <div className={css.container}>
          <h2>Contacts</h2>
          {!users.length ? (
            <h3>Your phonebook is empty. Add your first contact</h3>
          ) : (
            <>
              <h3>Your phonebook has {users.length} contacts</h3>
              <SearchBar />
              <ContactList contacts={contacts} />
            </>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default App
