import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, useSelector } from 'react-redux';
import store from './REDUX/STORE';
import Home from './Home'
function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App
