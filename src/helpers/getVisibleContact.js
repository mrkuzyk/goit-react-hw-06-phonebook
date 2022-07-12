const getVisibleContact = (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase(); // що не було похибки, то підношу всі до великих букв
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)); // фільтрую і повертаю тільки ті контакти, які відповідають пошуку
};

export default getVisibleContact;