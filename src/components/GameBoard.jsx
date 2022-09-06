import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';

import { validateWord, shuffleArray, initTilesArray } from '../api/clientGameLogic';

import TileBoard from './TileBoard';

import './GameBoard.css';

const GameGoard = ({ startingWord }) => {
  // TILE: { letter: 'a', clicked: false }
  const [ tileArray, setTileArray ] = useState([]);
  const [ acceptedWords, setAcceptedWords ] = useState([]);
  const [ currentEntry, setCurrentEntry ] = useState('');
  const [ invalidWord, setInvalidWord ] = useState('');
  const [ accept, setAccept ] = useState('');
  // const [ playerName, setPlayerName ] = useState('');

  useEffect(() => {
    const arr = initTilesArray(startingWord);
    setTileArray(arr);
  }, [startingWord]);



  /* EVENT HANDLERS */

  const handleShuffle = () => {
    const arr = shuffleArray(tileArray);
    setTileArray(arr);
  }

  const handleReset = () => {
    setCurrentEntry('');
    resetTiles();
    setInvalidWord(false);
    setAccept('');
    setAcceptedWords([]);
  }

  const handleWordInputChange = event => {
    const testWord = event.target.value;
    updateCurrentEntry(testWord);
  }

  const handleEnter = () => {
    if (currentEntry) {
      setInvalidWord(validateWord(currentEntry) ? '' : currentEntry);
      
      if (currentEntry && !invalidWord) {
        setAcceptedWords([...acceptedWords, currentEntry]);
        setAccept(currentEntry);
        setCurrentEntry('');
        resetTiles();
      }
    }
    
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter' || event.key === 'Tab')
      handleEnter();
  }

  const handleTileClick = (index) => {
    let tmpEntry;
    const newArray = tileArray.map((tile, idx) => {
      if (idx === index) {
        
        const cl = !tile.clicked;
        return {...tile, clicked: cl }
      } else
        return tile;
    })

    const tile = newArray[index];
    if (tile.clicked) {
      // add letter 
      console.log(tile.letter + ' clicked!')
      tmpEntry = currentEntry + tile.letter;
    } else {
      // remove letter
      console.log(tile.letter + ' unclicked!')
      tmpEntry = currentEntry.replace(tile.letter, '');
    }

    // update state
    setTileArray(newArray);
    updateCurrentEntry(tmpEntry);
  }



  /* ACTIONS */

  const resetTiles = () => {
    const newArray = tileArray.map(tile => {
      return {...tile, clicked: false}
    });
    setTileArray(newArray);
  }


  const updateCurrentEntry = entryWord => {
    setCurrentEntry(entryWord);
    if (currentEntry) {
      setInvalidWord(validateWord(currentEntry) ? '' : currentEntry);
    
    }
    if (accept)
      setAccept('');
  }


  

  return (
    <Container className="GameBoard">
      
      <Row>
        <Col md={8} sm={12}>
          {/* <Container id="playerNameBox" className="box">
            <label htmlFor="playerInput">Player Name:</label>{' '}
            <input type="text" id="playerInput" value={playerName} />
          </Container> */}
      
          <Container className="wordEntryBox box">
            <label htmlFor="wordInput">Word:{' '}</label>
            <input type="text" id="wordInput" 
                  value={currentEntry}
                  onChange={handleWordInputChange} 
                  onKeyDown={handleKeyPress} />
            <Button id="checkWord" variant="primary" onClick={handleEnter}>Enter</Button>
              {invalidWord && (
                  <Alert variant="warning" className="invalid"><em>{invalidWord}</em> is not valid!</Alert>
                )}
          </Container>

          <Container className="startingWordBox box">
            <TileBoard seedArray={tileArray} tileClick={handleTileClick} />
            <Button className="shuffleBtn" variant="dark" onClick={handleShuffle}>Shuffle</Button>
            <Button className="resetBtn" variant="warning" onClick={handleReset}>Reset</Button>
          </Container>
         
        </Col>
        <Col md={4} sm={12} className="acceptedWordsBox box">
          {acceptedWords.length>0 && (
            
          <Container>
            <Row>
              <Col md={12}>
                <h2>Accepted Words</h2>
              </Col>
            </Row>
            <Row>
              <Col sm={6}><strong>Word</strong></Col>
              <Col sm={6}><strong>Score</strong></Col>
            </Row>
            {acceptedWords.map((word, idx) => (
              <Row key={word + idx}>
                <Col sm={6}>{word}</Col>
                <Col sm={6}>{word.length}</Col>
              </Row>
              ))}
          </Container>
          )}
        
        </Col>
      </Row>
     


      
     
      
    </Container>
  )
}

export default GameGoard;