import React from 'react';
// import socket from 'socket.io-client';
import io from '../node_modules/socket.io-client/dist/socket.io.js';
//'../node_modules/socket.io-client';
//'socket.io/node_modules/socket.io-client';
import './App.css';

function App() {
  const socket = io('wss://api.delta.exchange:2096');
  console.log(socket);
  return (
    <div className="App">
      <h1> Proximity challenge  </h1>
    </div>

  );
}

export default App;
