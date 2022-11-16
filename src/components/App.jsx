// import { nanoid } from 'nanoid'
import  Form  from './ContactForm/ContactForm';
import  {ContactList}  from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, ContainerHed, ContainerHeder } from './AppStyled';

export default function App() {

  return (
    <Container>
      <ContainerHed>Phonebook</ContainerHed>
        <Form />
      <ContainerHeder>Contacts</ContainerHeder>
      <Filter />
      <ContactList />
    </Container>
  );
  }