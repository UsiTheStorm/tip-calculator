import { useState } from 'react';

import './App.css';

import Bill from './components/Bill';
import Service from './components/Service';
import TotalTipAmount from './components/TotalTipAmount';
import Reset from './components/reset';

function App() {
  return (
    <div className="App">
      <Bill />
      <Service />
      <TotalTipAmount />
      <Reset />
    </div>
  );
}

export default App;
