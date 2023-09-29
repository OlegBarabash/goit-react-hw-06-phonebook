import { useDispatch, useSelector } from 'react-redux';
import { ListItem, List } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactSlice';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const contArr = contacts.filter(({ contactName }) =>
    contactName.toLowerCase().includes(filter)
  );

  const dispatch = useDispatch();
  const onDelete = id => dispatch(deleteContact(id));

  if (contArr.length) {
    return (
      <List>
        {contArr.map(cont => (
          <ListItem key={cont.id}>
            {cont.contactName}: {cont.number}
            <button onClick={() => onDelete(cont.id)}>Delete</button>
          </ListItem>
        ))}
      </List>
    );
  }
};
