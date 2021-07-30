import React from 'react';
import PropTypes from 'prop-types';

const History = ({ url, method, body, onClick }) => {
  return (
    <li onClick={onClick}>
      <h2>{method}</h2>
      <p>{url}</p>
      <p>{body}</p>
    </li>
  );
};

History.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string,
  onClick: PropTypes.func.isRequired

};
