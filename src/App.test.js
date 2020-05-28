import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import App from './App';

test('renders learn react link', () => {
  const { getByTestId } = render(<BrowserRouter><App /></BrowserRouter>);
  expect(getByTestId("app")).toBeInTheDocument();
});
