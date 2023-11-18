import { selectContacts } from '../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { fetchContacts } from "../redux/operation";


import FormContact from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';

export const App = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  
  return (
    <Section>
      <h2>Phonebook</h2>
      <FormContact/>
      <Filter/>
      {contacts.length !== 0 && <ContactList/>}
    </Section>
      );
};
