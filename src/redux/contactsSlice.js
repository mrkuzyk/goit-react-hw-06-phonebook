import { createSlice } from "@reduxjs/toolkit";
import {initialState} from 'redux/initialState'


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialState.items,
    reducers: {
        add: (state, action) => {
            return [action.payload, ...state];
        },
        deleted: (state, action) => {
            return state.filter((contact => contact.id !== action.payload));
        },
    }
});

export const contactsReducer = contactsSlice.reducer;

export const  { add, deleted } = contactsSlice.actions;