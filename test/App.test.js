import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders learn react link', () => {
  render(<App />);
  const titleElement = screen.getByText(/WordGeek/i);
  expect(titleElement).toBeInTheDocument();
});
