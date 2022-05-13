import s from './Container.module.css';
import PropTypes from 'prop-types';

function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.array.isRequired,
};
export default Container;
