import React from 'react';
import { render } from '@testing-library/react';
import SeasonWinners from './SeasonWinners';

let component;
let getByTestId;

const fakeWinnersData = [
   {
      givenName: 'jake',
      familyName: 'the dog',
      points: '145',
      wins: '9',
   },
];

describe('SeasonWinner component', () => {
   it('renders the page', () => {
      component = render(<SeasonWinners winners={fakeWinnersData} />);
      getByTestId = component.getByTestId;
      let element = getByTestId('season-winners-page');
      expect(element).toBeTruthy();
   });

   it('renders the page title', () => {
      component = render(<SeasonWinners winners={fakeWinnersData} />);
      getByTestId = component.getByTestId;
      let element = getByTestId('page-title');
      expect(element).toBeTruthy();
   });

   it('renders the back button', () => {
      const { getByText } = render(<SeasonWinners winners={fakeWinnersData} />);
      getByTestId = component.getByTestId;
      let element = getByText('Back');
      expect(element).toBeTruthy();
   });

   it('renders the table', () => {
      component = render(<SeasonWinners winners={fakeWinnersData} />);
      getByTestId = component.getByTestId;
      let element = getByTestId('season-winners-table');
      expect(element).toBeTruthy();
   });

   it('shows the correct data received from props', () => {
      const { getByText } = render(<SeasonWinners winners={fakeWinnersData} />);
      expect(getByText(fakeWinnersData[0].givenName)).toBeInTheDocument();
      expect(getByText(fakeWinnersData[0].familyName)).toBeInTheDocument();
      expect(getByText(fakeWinnersData[0].points)).toBeInTheDocument();
      expect(getByText(fakeWinnersData[0].wins)).toBeInTheDocument();
   });
});
