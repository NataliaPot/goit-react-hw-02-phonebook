import React from 'react';
import { ContactItem, TextItem } from './Contact.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';

const Contact = ({ name, number, handleDelete, id }) => {
  return (
    <ContactItem>
      <TextItem>
        {name}: {number}
      </TextItem>
      <Button type="button" onClick={() => handleDelete(id)}>
        Delete
      </Button>
    </ContactItem>
  );
};

export default Contact;
