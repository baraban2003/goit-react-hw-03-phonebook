import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';

const Contact = ({ name, number, deleteEl, id }) => {
  return (
    <li className={s.serchEl}>
      {name}: {number}
      <button
        type="button"
        className={`${s.ripple} ${s.deletBtn}`}
        onClick={() => deleteEl(id)}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  deleteEl: PropTypes.func.isRequired,
};

export default Contact;
