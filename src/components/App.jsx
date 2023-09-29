import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container } from './App.styled.js';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

// const LOCALSTORAGE_KEY = 'contactBoock';

// const getInitialContacts = () => {
//   const savedContacts = localStorage.getItem(LOCALSTORAGE_KEY);
//   if (savedContacts !== null) {
//     return JSON.parse(savedContacts);
//   }
//   return [];
// };

export const App = () => {
  // const [contactsq, setContacts] = useState(getInitialContacts);

  const setContacts = arr => console.log('setContacts => ', arr);

  const contacts = useSelector(getContacts);

  // useEffect(() => {
  //   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  const addContact = ({ name, number }) => {
    const isExist = contacts.find(
      ({ contactName }) => contactName.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${isExist.contactName} is alredy in contacts!`);
      return;
    }
    setContacts(prevState => [
      ...prevState,
      { id: nanoid(), contactName: name, number: number },
    ]);
  };

  // const onFind = name => {
  //   const findName = name.toLowerCase();
  //   setFilter(findName);
  // };

  // const filterResult = () => {
  //   return contacts.filter(({ contactName }) =>
  //     contactName.toLowerCase().includes(filter)
  //   );
  // };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(cont => cont.id !== id));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      {!contacts.length ? (
        <h2>No contacts</h2>
      ) : (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList onDelete={deleteContact} />
        </>
      )}
    </Container>
  );
};
