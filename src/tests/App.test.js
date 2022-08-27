import { render, screen } from '@testing-library/react';
import {jest} from '@jest/globals';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading', {name: 'Tasks Done'});
  expect(linkElement).toBeInTheDocument();
});
