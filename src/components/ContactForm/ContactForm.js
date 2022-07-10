import { useState } from "react";
import s from './ContactForm.module.css'

// onSubmit це пропси які приймаються тут
export default function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        const { name, value } = e.currentTarget; // отримую значення в імпуті

        // залежно від того яке поле міняється, то я записую в стейт
        switch (name) {
            case "name":
                setName(value)
                break;
            
            case "number":
                setNumber(value);
                break;
        
            default:
                break;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        // приймаю пропси і записую їх в стейт при сабміті
        onSubmit({ name, number});

        reset();
    };

    const reset = () => {
        // очищую імпути
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <label className={s.label}> Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    className={s.input}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label className={s.label}> Number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    className={s.input}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button type="submit" className={s.btn}>Add contact</button>
        </form>
    );
};