import { render, screen } from '@testing-library/react';
import GameBoard from '../src/components/GameBoard';

const doNothing = () => {
  console.log('function called');
}



test('renders GameBoard element', () => {
  render(<GameBoard startingWord="someword" playerName="Player1" submitWord={doNothing} resetFn={doNothing} />);
  const wordInput = screen.getByTestId('wordInput');
  expect(wordInput).toBeInTheDocument();
})