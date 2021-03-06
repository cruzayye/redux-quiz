import React from 'react';
import PropTypes from 'prop-types';

function Controls({ title, subtitle, onChange }) {
  return (
    <>
      <input type='text' name='title' value={title} onChange={onChange} />
      <input type='text' name='subtitle' value={subtitle} onChange={onChange} />
    </>
  );
}

Controls.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Controls;

