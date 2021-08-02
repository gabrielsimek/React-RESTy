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
  return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h2>History</h2>
    <ul 
      style={{ margin: '10px', listStyle: 'none', width: '400px' }}
    >{historyItems}
    </ul>
  </div>;
};

HistoryList.propTypes = {
  history: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default HistoryList;
