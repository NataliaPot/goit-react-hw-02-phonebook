import React from 'react';
import { Input } from 'components/ContactForm/ContactForm.styled';
import { LabelFindText } from './FilterContact.styled';

const FilterContact = ({ filter, onChange }) => {
  return (
    <LabelFindText>
      Find contacts by name
      <Input type="text" name="filter" value={filter} onChange={onChange} />
    </LabelFindText>
  );
};

export default FilterContact;
