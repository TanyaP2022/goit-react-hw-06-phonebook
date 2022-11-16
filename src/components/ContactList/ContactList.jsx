import { ContactListStyle, ContactButton, ContactItemStyle } from './ContactListStyled';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilteredContact } from '../../redux/ContactSlice';
import { deletedContact } from '../../redux/ContactSlice';

export const ContactList = () =>{
    const dispatch = useDispatch();
    const contactItems = useSelector(getContacts);
    const filteredItems = useSelector(getFilteredContact);

  const currentContacts = contactItems.filter(element =>
    element.name.toLowerCase().includes(filteredItems.toLowerCase())
  );
  
    const elements = currentContacts.map(({ name, number, id }) => {
        return <ContactItemStyle key={id}>{name}: {number}
                    <ContactButton
                            type="button"
                            onClick={() => dispatch(deletedContact(id))}>
                            Delete
                    </ContactButton>
                </ContactItemStyle>
    })
    return (
        <ContactListStyle>{elements}</ContactListStyle>
            )
}