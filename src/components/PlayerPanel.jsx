import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const PlayerPanel = ({ setPlayerName }) => {

  const inputRef = useRef(null);

  const handleSubmit = () => {
    const player = inputRef.current.value;
    setPlayerName(player);
    inputRef.current.value = '';
  }

  return (
    <Container id="playerPanel">
      <InputGroup className="mb-3">
        <InputGroup.Text>Player Name:</InputGroup.Text>
        <Form.Control ref={inputRef} />
        <Button variant="primary" onClick={handleSubmit}>Enter</Button>
      </InputGroup>
    </Container>
  )
}

export default PlayerPanel;