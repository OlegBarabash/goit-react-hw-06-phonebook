import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  Label,
  StyledField,
  Button,
  ErrorMsg,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { getContacts } from 'redux/selectors';
import toast, { Toaster } from 'react-hot-toast';
import { MdOutlineWarningAmber } from 'react-icons/md';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number()
    .min(1000000, 'Too Short!')
    .max(999999999999, 'Too Long!')
    .positive('Must be positive')
    .integer('integer')
    .required('Required'),
});

export const ContactForm = () => {
  const { contacts } = useSelector(getContacts);
  const dispatch = useDispatch();
  const onAdd = data => {
    const isExist = contacts.some(
      ({ contactName }) => contactName.toLowerCase() === data.name.toLowerCase()
    );
    isExist
      ? toast('Try different name', {
          icon: <MdOutlineWarningAmber />,
        })
      : dispatch(addContact(data));
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <Label>
            Name
            <StyledField type="text" name="name" />
            <ErrorMsg name="name" component="div" />
          </Label>
          <Label>
            Tel. number
            <StyledField type="tel" name="number" />
            <ErrorMsg name="number" component="div" />
          </Label>
          <Button type="submit">Add Contact</Button>
        </StyledForm>
      </Formik>
      <Toaster />
    </>
  );
};
