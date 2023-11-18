import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  MyForm,
  MyField,
  Label,
  InputContainer,
  ButtonForm,
  ErrorMsg,
} from './Form.styled';
import { addContact } from '../../redux/operation';
import { selectContacts } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Only letters are allowed')
    .min(3, 'Too Short!')
    .required('This field is required, please fill that'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Must be in format: 000-000-0000')
    .required('This field is required, please fill that'),
});

const FormContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, phone }, { resetForm }) => {
    const finalContact = {
      id: nanoid(),
      name: name,
      phone: phone,
    };
  
    const identContactName = contacts.find(contact => contact.name === name);

    if (identContactName) {
      return toast.info(`is already in contacts`, 'ok');
    }
    dispatch(addContact(finalContact));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        <MyForm>
          <InputContainer>
            <Label htmlFor="name">Name</Label>
            <MyField type="text" name="name" placeholder="" />
            <ErrorMsg name="name" component="div" />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="phone">Number</Label>
            <MyField type="tel" name="phone" placeholder="" />
            <ErrorMsg name="phone" component="div" />
          </InputContainer>
          <ButtonForm type="submit">Add contacu</ButtonForm>
        </MyForm>
      </Formik>
      <ToastContainer />
    </>
  );
};
export default FormContact;
