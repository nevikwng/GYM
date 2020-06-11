import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';

//
import NavBar from './Compoments/NavBar'
import OrderList from './Compoments/OrderList'
import CartList from './Compoments/CartList'
import CheckOutPage from './Compoments/CheckOutPage'
 
function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route  path="/OrderList">
            <OrderList />
          </Route>
          <Route  path="/CartList">
            <CartList />
          </Route>
          <Route  path="/CheckOutPage">
            <CheckOutPage />
          </Route>
        </Switch>

      </>
    </Router>
  );
}

export default App;
