import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import TileBoard from './TileBoard';

import './GameBoard.css';

const GameGoard = ({ startingWord, validateWord }) => {
  const [ acceptedWords, setAcceptedWords ] = useState([]);
  const [ currentWord, setCurrentWord ] = useState('');
  const [ invalidWord, setInvalidWord ] = useState(false);

  const handleChange = event => {
    const testWord = event.target.value;
    setCurrentWord(testWord);
    setInvalidWord(!validateWord(startingWord, testWord));
    
  }

  const handleEnter = event => {
    if (currentWord && !invalidWord) {
      setAcceptedWords([...acceptedWords, currentWord]);
      event.target.value = '';
    }
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter')
      handleEnter(event);
  }

  return (
    <Container className="GameBoard">
      <Container className="startingWordBox box">
        <TileBoard seedString={startingWord} />
      </Container>
      <Container className="wordEntryBox box">
        <span className="label">Word:{' '}</span>
          <input type="text" id="wordInput" 
                onChange={handleChange} 
                onBlur={handleEnter} 
                onKeyDown={handleKeyPress} />
            {invalidWord && (
                <div className="invalidWord"><em>{currentWord}</em> is not valid!</div>
              )}
      </Container>

      <Container className="acceptedWordsBox box">
        <h2>Accepted Words</h2>
        <Row>
          <Col sm="6" xs="12">Word</Col>
          <Col sm="6" xs="12">Score</Col>
        </Row>
        {acceptedWords.map(word => (
          <Row>
            <Col>{word}</Col>
            <Col>{word.length}</Col>
          </Row>
          ))}
      </Container>
      
    </Container>
  )
}

export default GameGoard;