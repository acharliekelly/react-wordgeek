import React from 'react';
import { Badge } from 'react-bootstrap';
import './LetterTile.css';

const LetterTile = ({ letter, isClicked, index, clickHandler }) => {

  const handleClick = () => {
    clickHandler(index);
  }

  return (
    <Badge md={3} sm={4} xs={6}  
      className={isClicked ? "clicked" : "init"}
      bg={isClicked ? "secondary" : "success"}
      text="light"
      onClick={handleClick}>{letter}</Badge>
  )
}

export default LetterTile;