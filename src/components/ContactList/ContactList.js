import { useDispatch, useSelector } from 'react-redux';
import { ListItem, List, DeleteBtn } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactSlice';
import { MdDeleteForever } from 'react-icons/md';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const { contacts } = useSelector(getContacts);

  const contArr = contacts.filter(({ contactName }) =>
    contactName.toLowerCase().includes(filter)
  );

  const dispatch = useDispatch();
  const onDelete = id => dispatch(deleteContact(id));

  return (
    <>
      {contArr.length !== 0 ? (
        <List>
          {contArr.map(cont => (
            <ListItem key={cont.id}>
              {cont.contactName}: {cont.number}
              <DeleteBtn onClick={() => onDelete(cont.id)}>
                <MdDeleteForever color="#e84343" size={20} />
              </DeleteBtn>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>Not found!</p>
      )}
    </>
  );
};
