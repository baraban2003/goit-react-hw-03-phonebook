import React from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';

const ContactList = ({ contactArrey, onDeleteEl, id }) => {
  return (
    <ul>
      {contactArrey.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            deleteEl={onDeleteEl}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactArrey: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteEl: PropTypes.func.isRequired,
};
export default ContactList;
