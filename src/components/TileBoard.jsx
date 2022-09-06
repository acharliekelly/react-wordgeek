import React from 'react';
import Container from 'react-bootstrap/Container';

import LetterTile from './LetterTile';

import './TileBoard.css';

const TileBoard = ({ seedArray, tileClick }) => {

  const arraySize = seedArray.length;

  return (
    <Container className="board">
      { seedArray.map((tile, idx) => (
        <LetterTile 
          key={tile.letter + idx}
          boardSize={arraySize}
          letter={tile.letter} isClicked={tile.clicked} index={idx}
          clickHandler={tileClick} />
      ))}
    </Container>
  )
}

export default TileBoard;