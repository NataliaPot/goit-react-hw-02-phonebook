import { nanoid } from 'nanoid';
import { Component } from 'react';
import {
  TitleContacts,
  TitlePhonebook,
} from './ContactForm/ContactForm.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = (name, number) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newUser = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newUser],
    }));
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <ContactForm createContact={this.createContact} />
        <TitleContacts>Contacts</TitleContacts>
        <ContactList
          contacts={contacts}
          filter={filter}
          onFiltered={this.handleChangeFilter}
          handleDelete={this.handleDelete}
        ></ContactList>
      </>
    );
  }
}

export default App;
