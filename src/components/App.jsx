import { useState, useEffect} from "react";
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import style from './App.module.css';


export function App() {

  // лінива ініціалізація, щоб кожен раз не рендирився стейт через локал сторедж
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ??
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  });
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    // якщо в контактах є вже таке ім'я то видає помилку 
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    };

    // якщо ім'я унікальне, то створюю новий контакт з id
    const contact = {
      id: nanoid(5),
      name,
      number,
    };

    // новий контакт додаю спереді, пер тими що були
    setContacts(prevContacts => [contact, ...contacts])
  };

  const deleteContact = (id) => {
    
    // шукаю конткакт який має id таке ж, як і було на кнопці видалити і повертаю всі, крім нього
    setContacts(prevContacts => contacts.filter(contact => contact.id !== id))
  };

  const searchFilter = e => {
    // отримую значення з інпуту і записую його в стейт
    setFilter(e.currentTarget.value)
  };

  const getVisibleContact = () => {
    // що не було похибки, то підношу всі до великих букв
    const normalizedFilter = filter.toLowerCase();

    // фільтрую і повертаю тільки ті контакти, які відповідають пошуку
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     setContacts(parsedContacts)
  //   };
  // }, []);

  useEffect(() => {
    // записую в локал сторедж контакти
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
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
        contacts={getVisibleContact()}
        onDeleteContact={deleteContact}
      />
    </div>
  )
};
