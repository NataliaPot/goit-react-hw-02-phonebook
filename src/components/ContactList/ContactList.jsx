import React from 'react';
import { ListItem } from './ContactList.styled';
import { nanoid } from 'nanoid';
import Contact from 'components/Contact/Contact';
import FilterContact from 'components/FilterContact/FilterContact';

const ContactList = ({ contacts, filter, onFiltered, handleDelete }) => {
  const onFilteredContact = contacts.filter(contact => {
    return contact.name.toLocaleUpperCase().includes(filter.toUpperCase());
  });
  return (
    <>
      <FilterContact onChange={onFiltered} />
      <ListItem>
        {onFilteredContact.map(contact => (
          <Contact key={nanoid()} {...contact} handleDelete={handleDelete} />
        ))}
      </ListItem>
    </>
  );
};

export default ContactList;
