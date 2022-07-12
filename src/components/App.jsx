import { useEffect} from "react";
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import style from './App.module.css';
import { useSelector, useDispatch } from "react-redux";
import { add, deleted } from "redux/contactsSlice";
import { filtered } from "redux/searchFilterSlice";
import getVisibleContact from "helpers/getVisibleContact";

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const addContact = ({ name, number }) => {
    
    if (contacts.some(contact => contact.name === name)) { 
      return alert(`${name} is already in contacts`); // якщо в контактах є вже таке ім'я то видає помилку 
    };

    // якщо ім'я унікальне, то створюю новий контакт з id
    const contact = {
      id: nanoid(5),
      name,
      number,
    };

    dispatch(add(contact)); // redux - новий контакт додаю спереді, пер тими що були
  };

  const deleteContact = (id) => {
    dispatch(deleted(id)) // redux - шукаю конткакт який має id таке ж, як і було на кнопці видалити і повертаю всі, крім нього
  };

  const searchFilter = e => {
    dispatch(filtered(e.currentTarget.value)) // отримую значення з інпуту і записую його
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts)) // записую в локал сторедж контакти
  }, [contacts])

  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter
        value={filter}
        onChange={searchFilter}
      />
      <ContactList
        contacts={getVisibleContact(filter, contacts)}
        onDeleteContact={deleteContact}
      />
    </div>
  )
};
