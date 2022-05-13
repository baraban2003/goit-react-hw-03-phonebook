import React from 'react';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

const SearchForm = ({ onChange }) => (
  <label className={s.searchBlock}>
    Find Contacts by Name
    <input className={s.searchInput} type="text" onChange={onChange} />
  </label>
);

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default SearchForm;
