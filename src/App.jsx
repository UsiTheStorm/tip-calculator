import { useState } from 'react';

import './App.css';

import Bill from './components/Bill';
import Service from './components/Service';
import TotalTipAmount from './components/TotalTipAmount';
import Reset from './components/reset';

function App() {
  const [bill, setBill] = useState('');
  const [myServiceQuality, setMyServiceQuality] = useState(0);
  const [friendServiceQuality, setFriendServiceQuality] = useState(0);

  function handleBill(bl) {
    setBill(Number(bl));
  }

  function handleMyServiceQuality(q) {
    setMyServiceQuality(Number(q));
  }

  function handleFriendServiceQuality(q) {
    setFriendServiceQuality(Number(q));
  }
  console.log(typeof bill, typeof myServiceQuality, typeof friendServiceQuality);
  function handleReset() {
    setBill('');
    setMyServiceQuality(0);
    setFriendServiceQuality(0);
  }

  return (
    <div className="App">
      <Bill bill={bill} onSetBill={handleBill} />
      <Service
        service={myServiceQuality}
        onServiceQuality={handleMyServiceQuality}
        serviceId="my-service"
      >
        How did you like?
      </Service>
      <Service
        service={friendServiceQuality}
        onServiceQuality={handleFriendServiceQuality}
        serviceId="friend#1-service"
      >
        How did friend like?
      </Service>
      <TotalTipAmount bill={bill} frService={friendServiceQuality} myService={myServiceQuality} />
      <Reset onReset={handleReset} />
    </div>
  );
}

export default App;
