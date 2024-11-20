// import { render, screen } from '@testing-library/react';
// import App from './App';

import { Sum } from "../Sum";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('should Give right sum of 2 numbers', () => {
  var sum = Sum(2,3);
  expect(sum).toBe(5);
});

