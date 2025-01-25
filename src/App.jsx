import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { setFilter } from './redux/filterSlice';
import { ToastContainer } from 'react-toastify';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <ToastContainer position='top-center' autoClose={3000} />
      <input
        type="text"
        placeholder="Search contacts"
        onChange={handleFilterChange}
      />
      {loading && <p>Loading...</p>}
      <ContactList />
    </div>
  );
};

export default App;
