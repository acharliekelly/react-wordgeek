import './App.css';
import GameBoard from './components/GameBoard';
// import LeaderBoard from './components/LeaderBoard';
import { getStartingWord } from './api/clientGameLogic';

function App() {
  // const topScores = getTopScores();
  const startingWord = getStartingWord();
  return (
    <div className="App">
      <header>
        <h1><strong>WordGeek</strong>{' '}Word Game</h1>
      </header>

      <GameBoard startingWord={startingWord} /> 

      {/* <LeaderBoard topScores={topScores} /> */}

    </div>
  );
}

export default App;
