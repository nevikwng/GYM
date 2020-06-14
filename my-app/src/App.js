import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//
import NavBar from './pages/NavBar'
import OrderList from './Compoments/OrderList/OrderList'
import CartList from './Compoments/CartList/CartList'
import CheckOutPage from './Compoments/CheckOutPage/CheckOutPage'

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/OrderList">
            <OrderList />
          </Route>
          <Route path="/CartList">
            <CartList />
          </Route>
          <Route path="/CheckOutPage">
            <CheckOutPage />
          </Route>
        </Switch>
      </>
    </Router>

  );
}

export default App;
