import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RequestInputs from './RequestInputs';

describe('RequestInputs component', () => {
  afterEach(() => cleanup());
  it('renders RequestInputs', () => {
    const { asFragment } = render(<RequestInputs />);
    expect(asFragment()).toMatchSnapshot();
  });
});
