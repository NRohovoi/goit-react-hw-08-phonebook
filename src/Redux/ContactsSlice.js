import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = {
  items: [
    { id: 'id-1', name: 'Angelina Jolie', number: '093-111-11-11' },
    { id: 'id-2', name: 'Bradley Pitt', number: '093-111-11-12' },
    { id: 'id-3', name: 'John Christopher', number: '093-111-11-13' },
    { id: 'id-4', name: 'Jennifer Aniston', number: '093-111-11-14' },
    { id: 'id-5', name: 'Julia Roberts', number: '093-111-11-15' },
    { id: 'id-6', name: 'Tom Cruise', number: '093-111-11-16' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
