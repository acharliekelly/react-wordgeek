import React from 'react';
import './LetterTile.css';

const LetterTile = ({ letter }) => {
  return (
    <div className="tile">
      {letter}
    </div>
  )
}

export default LetterTile;