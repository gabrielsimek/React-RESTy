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
  return <ul style={{ border: 'solid black 1px', backgroundColor: 'blue', margin: '10px', listStyle: 'none', width: '400px' }}>{historyItems}</ul>;
};

HistoryList.propTypes = {
  history: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default HistoryList;
