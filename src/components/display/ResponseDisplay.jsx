import React from 'react';
import ReactJson from 'react-json-view';
import PropTypes from 'prop-types';

const ResponseDisplay = ({ response }) => {
  return <ReactJson
    src={response}
  />;
};

export default ResponseDisplay;

ResponseDisplay.propTypes = {
  response: PropTypes.array
};
