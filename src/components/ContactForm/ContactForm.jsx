import { Component } from 'react';
import { Button, Form, Input, Label } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
            pattern="^[a-zA-Zа-яА-Я]+([ '—][a-zA-Zа-яА-Я]+)*$"
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            required
            pattern="\+?\d{1,4}?[ .\-]?\(?\d{1,3}?\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}"
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
