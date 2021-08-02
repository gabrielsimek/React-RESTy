import React from 'react';
import PropTypes from 'prop-types';

const HeaderInput = ({ headerKey, headerValue, onChange, onSubmit }) => {
  return (
    <>
  
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <label htmlFor="header-key"></label>
      Header Key
        <input
          id="header-key"
          type="text"
          name="headerKey"
          onChange={onChange}
          value={headerKey}
        />
        
        <label htmlFor="header-value"></label>
      Header Value
        <input
          id="header-value"
          type="text"
          name="headerValue"
          onChange={onChange}
          value={headerValue}
        />
        
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
