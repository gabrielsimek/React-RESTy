import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ url, method, body, onClick }) => {
  return (
    <li onClick={() => onClick({ url, method, body })}>
      <h2>{method}</h2>
      <p>{url}</p>
      <p>{body}</p>
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
