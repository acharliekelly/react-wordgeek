import { render, screen } from '@testing-library/react';
import LeaderBoard from '../components/LeaderBoard';


test('renders LeaderBoard element', () => {
  render(<LeaderBoard topScores={[]} />);
  const playerCol = screen.getByText('Player');
  expect(playerCol).toBeInTheDocument();
})