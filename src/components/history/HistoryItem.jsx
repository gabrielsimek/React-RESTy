import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ url, method, body, onClick }) => {
  return (
    <li 
      style={{ cursor: 'pointer', border: 'solid black 1px', margin: '5px', padding: '5px' }}
      onClick={() => onClick({ url, method, body })}>
      <h2>{method}</h2>
      <p>{url}</p>
      <p>{body ? JSON.stringify(body) : ''}</p>
    </li>
  );
};

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string,
  onClick: PropTypes.func.isRequired

};

export default HistoryItem;
