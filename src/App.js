import React from 'react';
import Home from './screens/Home';
import Signup from './screens/Signup';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/ContextReducer';

import './App.css';
import Login from './screens/Login';
import MyOrder from './screens/MyOrder';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
function App() {
  return (
  <CartProvider>
  <Router>
   <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/createuser' element={<Signup/>}/>
      <Route path='/myOrder' element={<MyOrder/>}/>
      </Routes>
   </div>
  </Router>
  </CartProvider>
  );
}

export default App;






