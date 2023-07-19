import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { DivContainerSection, DivContainerPhonebook} from '../Widget/Styles/DivStyles'
import { StyledH2 } from '../Widget/Styles/TitleStyles'
import { toast } from 'react-hot-toast'; // Importa la función toast de react-hot-toast



const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      // alert(`${newContact.name} is already in contacts.`);
      toast.error(`${newContact.name} is already in contacts.`); // Utiliza toast.error para mostrar un mensaje de error
    } else {
      setContacts([...contacts, newContact]);

      toast.success(`${newContact.name} has been added to contacts.`);
    }
  };

  const deleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <DivContainerSection className='test'>
      <DivContainerPhonebook>


      <ContactForm addContact={addContact} />

      <StyledH2>Contacts</StyledH2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
        />
        </DivContainerPhonebook>
    </DivContainerSection>
  );
};

export default Contacts;
