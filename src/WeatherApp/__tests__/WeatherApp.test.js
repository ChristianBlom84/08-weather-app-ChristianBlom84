import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import WeatherApp from '../WeatherApp';

describe('WeatherApp', () => {
  it('renders with h1', () => {
    const { getByText } = render(<WeatherApp />);
  
    const title = getByText(/Weather app testing/i)
  
    expect(title).toBeInTheDocument();
  });
})
