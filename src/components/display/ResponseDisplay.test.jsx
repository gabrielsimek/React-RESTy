import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ResponseDisplay from './ResponseDisplay';

describe('ResponseDisplay component', () => {
  afterEach(() => cleanup());
  it('renders ResponseDisplay', () => {
    const { asFragment } = render(<ResponseDisplay />);
    expect(asFragment()).toMatchSnapshot();
  });
});
