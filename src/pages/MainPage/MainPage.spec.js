import React from 'react';
import MainPage from './MainPage';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('MainPage component', () => {
   const fakeChampionsData = [
      {
         givenName: 'Michael',
         familyName: 'Schumacher',
         championshipYear: '2007',
      },
   ];

   it('renders the page', () => {
      const { getByTestId } = render(
         <BrowserRouter>
            <MainPage champions={fakeChampionsData} />
         </BrowserRouter>
      );
      expect(getByTestId('landing-page')).toBeInTheDocument();
   });

   // it('renders user data', async () => {
   //    const { getByText } = render(<MainPage champions={fakeChampionsData} />);
   //    expect(getByText(fakeChampionsData[0].givenName)).toBeInTheDocument();
   //    expect(getByText(fakeChampionsData[0].familyName)).toBeInTheDocument();
   //    expect(getByText(fakeChampionsData[0].championshipYear)).toBeInTheDocument();
   // });
});
