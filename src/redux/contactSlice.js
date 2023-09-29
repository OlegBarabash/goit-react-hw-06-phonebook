import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

const contactsBook = [
  { id: 1, contactName: 'Oleg', number: '123456789' },
  { id: 2, contactName: 'Oksana', number: '987456321' },
  { id: 'id-1', contactName: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', contactName: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', contactName: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', contactName: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsBook,
  reducers: {
    addContact(state, action) {
      console.log('state', state);
      console.log('action', action);
    },
    deleteContact(state, action) {
      return state.filter(cont => cont.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
