import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import GameBoard from './components/GameBoard';
import PlayerPanel from './components/PlayerPanel';
import LeaderBoard from './components/LeaderBoard';
import { getStartingWord } from './api/clientGameLogic';
import { submitWord } from './api/scoreBoard';

import './App.css';

function App() {
  const [ currentPlayer, setCurrentPlayer ] = useState('');
  const [ scoresList, setScoresList ] = useState([]);

  const startingWord = getStartingWord();

  const updateScores = (submittedWord) => {
    const tmp = submitWord(currentPlayer, submittedWord, scoresList);
    if (tmp) {
      setScoresList(tmp);
      return true;
    }
    return false;
  }

  const reset = () => {
    setCurrentPlayer('');
    setScoresList([]);
  }


  return (
    <div className="App">
      <header>
        <h1><strong>WordGeek</strong>{' '}Word Game</h1>
      </header>
      <Container>
        <Row>
          <Col md={8} sm={12}>
            <PlayerPanel setPlayerName={setCurrentPlayer} />
            <GameBoard 
              startingWord={startingWord} 
              playerName={currentPlayer} 
              submitWord={updateScores} 
              resetFn={reset} /> 
          </Col>
          <Col md={4} sm={12}>
            <LeaderBoard scores={scoresList} />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
