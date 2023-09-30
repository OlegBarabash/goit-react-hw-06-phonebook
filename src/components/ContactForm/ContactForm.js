import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  Label,
  StyledField,
  Button,
  ErrorMsg,
} from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';

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
  const dispatch = useDispatch();
  const onAdd = data => dispatch(addContact(data));

  return (
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
  );
};
