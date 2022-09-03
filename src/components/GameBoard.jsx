import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';


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
    if (!invalidWord) {
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
        <span className="label">Starting Word:</span>
        <span className="wordText">{startingWord}</span>
      </Container>
      <Container className="wordEntryBox box">
        <span className="label">Word:</span>
          <input type="text" id="wordInput" 
                onChange={handleChange} 
                onBlur={handleEnter} 
                onKeyDown={handleKeyPress} />
            {invalidWord && (
                <div className="invalidWord">{currentWord} is not valid!</div>
              )}
      </Container>

      <Container className="acceptedWordsBox box">
        <h2>Accepted Words</h2>
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>Word</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {acceptedWords.map(word => (
              <tr>
                <td>{word}</td>
                <td>{word.length}</td>
              </tr>
              ))}
            </tbody>
          </Table>
      </Container>
      
    </Container>
  )
}

export default GameGoard;