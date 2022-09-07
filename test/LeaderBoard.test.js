import { render, screen } from '@testing-library/react';
import LeaderBoard from '../src/components/LeaderBoard';
import { mockScoresList } from './mockScores';


test('renders LeaderBoard element', () => {
  render(<LeaderBoard scores={mockScoresList} />);
  const player1 = screen.getByText('Player1');
  expect(player1).toBeInTheDocument();
})