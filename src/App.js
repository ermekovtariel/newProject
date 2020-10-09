import React from 'react';
import './App.css';
import Header from './components/Header';
import Content1 from './components/ContentPart1';
import Content2 from './components/ContentPart2';

function App() {
  return (
    <div className="App">
      <Header />
      <Content1 />
      <Content2 />
    </div>
  );
}

export default App;
