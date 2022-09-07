import React, { useState, useEffect } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';

import { validateWord, shuffleArray, initTilesArray } from '../api/clientGameLogic';


import TileBoard from './TileBoard';

import './GameBoard.css';

const GameGoard = ({ startingWord, playerName, submitWord, resetFn }) => {
  // TILE: { letter: 'a', clicked: false }
  const [ tileArray, setTileArray ] = useState([]);
  const [ currentEntry, setCurrentEntry ] = useState('');
  const [ invalidWord, setInvalidWord ] = useState('');

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
    setInvalidWord('');
    resetFn();
  }

  const handleWordInputChange = event => {
    const testWord = event.target.value;
    updateCurrentEntry(testWord);
  }

  const handleEnter = () => {
    if (currentEntry) {
      setInvalidWord(validateWord(currentEntry) ? '' : currentEntry);
      
      if (currentEntry && !invalidWord) {
        if (submitWord(currentEntry)) {
          // TODO: update
          console.log('ACCEPTED')
        }
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
      tmpEntry = currentEntry + tile.letter;
    } else {
      // remove letter
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
  }


  

  return (
    <Container className="GameBoard">
      <h3 className="playerName">{playerName}</h3>
      <Container id="wordEntryBox" className="box">
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

      <Container id="tileBox" className="box">
        <TileBoard seedArray={tileArray} tileClick={handleTileClick} />
        <Button className="shuffleBtn" variant="dark" onClick={handleShuffle}>Shuffle</Button>
        <Button className="resetBtn" variant="warning" onClick={handleReset}>Reset</Button>
      </Container>
     
      
    </Container>
  )
}

export default GameGoard;