import React from 'react';
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
