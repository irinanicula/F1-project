import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
   it('renders the landing page', () => {
      const { getByTestId } = render(
         <BrowserRouter>
            <App />
         </BrowserRouter>
      );
      expect(getByTestId('landing-page')).toBeInTheDocument();
   });
});
