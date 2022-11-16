import { nanoid } from 'nanoid'
import  Form  from './ContactForm/ContactForm';
import  {ContactList}  from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, ContainerHed, ContainerHeder } from './AppStyled';
import { useState, useEffect } from 'react';

import { addContact, getContacts } from '../redux/ContactSlice';
import { useDispatch, useSelector } from 'react-redux';




export default function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  const contactItems = useSelector(getContacts);

  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  
const addNewContact = ({ name, number }) => {
  const newContact = {
    name,
    number,
    id: nanoid(),
  };

  if (
    contactItems.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()|| contact.number.toLowerCase() === number.toLowerCase()
    )
  ) {
    return alert(`${name}/${number} is already in contacts!`);
  }
  return dispatch(addContact(newContact));
  };

 const handleChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const currentContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase())|| contact.number.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const deleteContact = contactId => {
    setContacts(prevState=> prevState.filter(contact => contact.id !== contactId),);
    };

    return (
      <Container>
        <ContainerHed>Phonebook</ContainerHed>
          <Form onSubmit={addNewContact} />
        <ContainerHeder>Contacts</ContainerHeder>
        <Filter
          filter={filter}
          onChange={handleChangeFilter}
        />
        <ContactList
          items={currentContacts()}
          onDeleteContact={deleteContact} />
      </Container>
    );
  }