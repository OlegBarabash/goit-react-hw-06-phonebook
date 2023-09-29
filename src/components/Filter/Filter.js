import { useDispatch } from 'react-redux';
import { Label, StyledInput } from '../ContactForm/ContactForm.styled';
import { setContactsFilter } from 'redux/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = filter => dispatch(setContactsFilter(filter));

  return (
    <Label>
      Find contacts by name
      <StyledInput
        type="text"
        name="name"
        onChange={e => handleFilterChange(e.target.value.toLowerCase())}
      />
    </Label>
  );
};
