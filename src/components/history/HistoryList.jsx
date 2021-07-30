import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistoryList = ({ history }) => {
  const historyItems = history.map(item => {
    return <HistoryItem 
      key={item.id}
      {...item}
    />;
  });
  return <ul>{historyItems}</ul>;
};

HistoryList.propTypes = {
  history: PropTypes.array.isRequired
};

export default HistoryList;
