import React from 'react';
import { Container } from 'react-bootstrap';

import LetterTile from './LetterTile';

const TileBoard = ({ seedString }) => {
  const letterArr = seedString.split('');
  
  return (
    <Container style={{'padding':'3em'}}>
      { letterArr.map((char, idx) => (
        <LetterTile key={char + idx} letter={char} />
      ))}
    </Container>
  )
}

export default TileBoard;