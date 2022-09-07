import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './LeaderBoard.css';

const LeaderBoard = ({ scores }) => {

  return (
    <Container className="leaderBoard">
      
      <h2>Leader Board</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Player</th>
            <th>Word</th>
            <th>Score</th>
          </tr>
          
        </thead>
        <tbody>
          {scores.map((entry, index) => (
            <tr key={'t' + entry.timestamp}>
              <td>{index+1}</td>
              <td className="player">{entry.player}</td>
              <td className="word">{entry.word}</td>
              <td className="score">{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
};

export default LeaderBoard;