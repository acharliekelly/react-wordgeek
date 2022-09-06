import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './LeaderBoard.css';

const LeaderBoard = ({ scores }) => {

  return (
    <Container className="leaderBoard">
      
      <h2>Leader Board</h2>
      <Table striped bordered hover>
        <thead>
          <th>#</th>
          <th>Player</th>
          <th>Word</th>
          <th>Score</th>
        </thead>
        <tbody>
          {scores.map((entry, index) => (
            <tr key={'t' + entry.timestamp}>
              <td>{index}</td>
              <td>{entry.player}</td>
              <td>{entry.word}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
};

export default LeaderBoard;