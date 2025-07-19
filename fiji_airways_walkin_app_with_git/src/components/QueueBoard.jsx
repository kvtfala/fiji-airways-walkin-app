import React from 'react';
import CounterDisplay from './CounterDisplay';

function QueueBoard() {
  const counters = [
    { id: 1, status: 'Available' },
    { id: 2, status: 'Serving' },
    { id: 3, status: 'Closed' },
    { id: 4, status: 'Available' },
    { id: 5, status: 'Serving' },
    { id: 6, status: 'Available' },
    { id: 7, status: 'Closed' }
  ];

  return (
    <div className="queue-board">
      {counters.map(counter => (
        <CounterDisplay key={counter.id} counter={counter} />
      ))}
    </div>
  );
}

export default QueueBoard;
