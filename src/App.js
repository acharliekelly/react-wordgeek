// import logo from './ck-splotch.svg';
import './App.css';
import GameBoard from './components/GameBoard';
// import LeaderBoard from './components/LeaderBoard';
import { validateWord, getStartingWord, getTopScores } from './api/clientGameLogic';


function App() {
  const topScores = getTopScores();
  const startingWord = getStartingWord();
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1><strong>WordGeek</strong>{' '}Word Game</h1>
      </header> */}

      <GameBoard 
        startingWord={startingWord} 
        validateWord={validateWord} /> 

      {/* <LeaderBoard topScores={topScores} /> */}

    </div>
  );
}

export default App;
