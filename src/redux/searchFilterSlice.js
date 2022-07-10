import { createSlice } from "@reduxjs/toolkit";
import {initialState} from 'redux/initialState'


const searchFilterSlice = createSlice({
    name: 'filter',
    initialState: initialState.filter,
    reducers: {
        filtered: (state, action) => {
            return action.payload;
        },
    }
});

export const searchFilterReducer = searchFilterSlice.reducer;

export const  { filtered } = searchFilterSlice.actions;