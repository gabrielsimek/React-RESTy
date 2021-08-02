import React from 'react';
import ReactJson from 'react-json-view';
import PropTypes from 'prop-types';

const ResponseDisplay = ({ response }) => {

  return <ReactJson
    style={{ width: '50%' }}
    src={response}
    displayDataTypes={false}
  />;
};

export default ResponseDisplay;

ResponseDisplay.propTypes = {
  response: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};
