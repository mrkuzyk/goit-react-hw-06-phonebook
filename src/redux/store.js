import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './contactsSlice';
import { searchFilterReducer } from "./searchFilterSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: searchFilterReducer,
    },
})





//! пробне з через createReducer, createAction
// export const add = createAction('contact/add')

// const init = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const contactOperation = createReducer(init, {
//     [add]: (state, action) => {
//         return [action.payload , ...state];
//     },
// })



// export const store = configureStore({
//     reducer: {
//         clics: contactOperation,
//     },
// })