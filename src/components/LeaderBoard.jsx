import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './LeaderBoard.css';

const LeaderBoard = ({ topScores }) => {

  return (
    <Container className="leaderBoard">
      <Table striped bordered hover>
        <thead>
          <th>#</th>
          <th>Player</th>
          <th>Word</th>
          <th>Score</th>
        </thead>
        <tbody>
          {topScores.map((entry, index) => (
            <tr key={entry.timestamp}>
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