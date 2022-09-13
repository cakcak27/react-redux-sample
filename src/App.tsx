import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import { useAppSelector, useAppDispatch } from './hooks';

import { decrement, increment } from './reducer';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = (e) => {
    dispatch({
      type: increment,
    });
    e.preventDefault();
  };

  const handleDecrement = (e) => {
    dispatch({
      type: decrement,
    });
    e.preventDefault();
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleDecrement}>Prev</button>
        <button onClick={handleIncrement}>Next</button>
        <p>{count}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
