import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';

//
import NavBar from './Compoments/NavBar'
import OrderList from './Compoments/OrderList'


function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/OrderList">
            <OrderList />
          </Route>
        </Switch>

      </>
    </Router>
  );
}

export default App;
