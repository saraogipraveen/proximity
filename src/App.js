import React from 'react';
import io from '../node_modules/socket.io-client/dist/socket.io.js';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import OrderBook from './components/OrderBook';
import NavBar from './components/NavBar';
import Container from './styled_components/Container';

const App = () => {
  const socket = io('wss://api.delta.exchange:2096');
  console.log(socket);
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <OrderBook />
          </Route>
          <Route exact path="/about">
            <h1>About</h1>
          </Route>
          <Route exact path="/users">
            <h1>Users</h1>
          </Route>
          <Route exact path="*">
            <Container><h1>Invalid Url</h1></Container>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
