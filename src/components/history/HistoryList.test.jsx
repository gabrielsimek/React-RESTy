import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryList from './HistoryList';

describe('HistoryList component', () => {
  afterEach(() => cleanup());
  const onClick = jest.fn();
  it('renders HistoryList', () => {
    const { asFragment } = render(<HistoryList onClick={onClick}  history={ [{ body: null, id: 0, method: 'GET', url: 'https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=3&page=2' }]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
