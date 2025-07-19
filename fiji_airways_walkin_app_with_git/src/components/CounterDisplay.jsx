import React from 'react';

function CounterDisplay({ counter }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Available': return 'green';
      case 'Serving': return 'orange';
      case 'Closed': return 'red';
      default: return 'gray';
    }
  };

  return (
    <div className="counter" style={{ borderColor: getStatusColor(counter.status) }}>
      <h2>Counter {counter.id}</h2>
      <p>Status: <span style={{ color: getStatusColor(counter.status) }}>{counter.status}</span></p>
    </div>
  );
}

export default CounterDisplay;
