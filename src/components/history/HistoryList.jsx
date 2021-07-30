import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistoryList = ({ history, onClick }) => {
  const historyItems = history.map(item => {
    return <HistoryItem 
      key={item.id}   
      {...item}
      onClick={onClick}
    />;
  });
  return <ul>{historyItems}</ul>;
};

HistoryList.propTypes = {
  history: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default HistoryList;
