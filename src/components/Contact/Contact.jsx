import React from 'react';
import { ContactItem } from './Contact.styled';

const Contact = ({ name, number }) => {
  return (
    <ContactItem>
      {name}: {number}
    </ContactItem>
  );
};

export default Contact;
