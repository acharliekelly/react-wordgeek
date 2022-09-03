import { render, screen } from '@testing-library/react';
import GameBoard from '../components/GameBoard';


test('renders GameBoard element', () => {
  render(<GameBoard startingWord="someword" validateWord={() => true} />);
  const wordInput = screen.getByTestId('wordInput');
  expect(wordInput).toBeInTheDocument();
})