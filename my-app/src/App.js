import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';

//
import NavBar from './Compoments/NavBar'
import OrderList from './Compoments/OrderList'
import CartList from './Compoments/CartList'
import CheckOutPage from './Compoments/CheckOutPage'
import Leacflet from './Compoments/React-Leaflet'

function App() {
  return (
      <>
        <Leacflet />
      </>
  );
}

export default App;
