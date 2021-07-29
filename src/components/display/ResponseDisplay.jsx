import React from 'react';
import ReactJson from 'react-json-view';
import PropTypes, { object } from 'prop-types';

const ResponseDisplay = ({ response }) => {
  return <ReactJson
    src={{ name: 'spot' }}
  />;
};

export default ResponseDisplay;

ResponseDisplay.PropTypes = {
  response: PropTypes.object
};
