import React from 'react';
import PropTypes from 'prop-types';

const HeaderInput = ({ headerKey, headerValue, onChange, onSubmit }) => {
  return (
    <>
  
      <form onSubmit={onSubmit}>
        <label>
      Header Key
          <input
            type="text"
            name="headerKey"
            onChange={onChange}
            value={headerKey}
          />
        </label>
        <label>
      Header Value
          <input
            type="text"
            name="headerValue"
            onChange={onChange}
            value={headerValue}
          />
        </label>
        <button>Add Header</button>
      </form>
    </>
  );
    
};

HeaderInput.propTypes = {
  headerKey: PropTypes.string.isRequired,
  headerValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default HeaderInput;
