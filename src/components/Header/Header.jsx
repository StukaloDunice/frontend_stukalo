import React from 'react';
import PropTypes from 'prop-types';

function Header({ name }) {
  return (
    <div>
      Hello,
      { name }
    </div>
  );
}
Header.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Header;
