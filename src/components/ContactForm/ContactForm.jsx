import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Button } from 'components/common/ButtonStyled';
import { useSelector, useDispatch } from 'react-redux';
import { getContactValue } from 'redux/contacts/contactSelectors';
import { addNewContacts } from 'redux/contacts/contactsOperations';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FormStyled, Label, Input } from 'components/common/FormStyled';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .required('Name is required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export default function ContactForm() {
  const contacts = useSelector(getContactValue);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    contacts.find(contact => contact.name === newContact.name)
      ? Notify.info(`${name} is already in contacts`)
      : dispatch(addNewContacts(newContact));

    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <Label htmlFor="name">
          Name
          <Input type="text" name="name" />
          <ErrorMessage name="name" />
        </Label>

        <Label htmlFor="number">
          Number
          <Input type="tel" name="number" />
          <ErrorMessage name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
}
