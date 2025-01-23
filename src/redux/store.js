import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlise';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
