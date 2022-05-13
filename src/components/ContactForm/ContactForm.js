import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const id = nanoid(5);

    const eventNameValue = event.target[0].value;
    const filterName = this.props.arrayContact.find(
      e => e.name === eventNameValue
    );

    filterName
      ? alert(`${eventNameValue} is already in Contacts`)
      : this.props.addContact({ id, ...this.state });

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={s.searchForm}>
          <h2>Name</h2>
          <input
            className={s.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />

          <h2>Number</h2>
          <input
            className={s.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />

          <button type="submit" className={s.ripple}>
            Add contact
          </button>
        </div>
      </form>
    );
  }
}

ContactForm.propType = {
  addContact: PropTypes.func.isRequired,
  arrayContact: PropTypes.array.isRequired,
};

export default ContactForm;
