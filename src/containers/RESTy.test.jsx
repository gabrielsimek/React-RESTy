import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RESTy from './RESTy';
describe('RESTy container', () => {
  it('renders RESTy container and sub components', async () => {
    render(<RESTy/>);
    //test inputs
    const urlInput = screen.getByPlaceholderText('URL');
    fireEvent.change(urlInput, { target: { value: 'https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=3&page=2' } });
    expect(urlInput.value).toBe('https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=3&page=2');

    const radioButton = screen.getByLabelText('GET');
    userEvent.click(radioButton);
    expect(radioButton).toBeChecked;

    //Click go and expect history to have been rendered
    const goButton = screen.getByText('Go!');
    userEvent.click(goButton);  
    const historyList =  await screen.findByRole('list');
    expect(historyList).not.toBeEmptyDOMElement;
  });
 
  
});
