import { useState } from 'react';

import './App.css';

import Bill from './components/Bill';
import Service from './components/Service';
import TotalTipAmount from './components/TotalTipAmount';
import Reset from './components/Reset';

function App() {
  const [bill, setBill] = useState('');
  const [myServiceQuality, setMyServiceQuality] = useState('');

  const [friendServiceQualitys, setFriendServiceQualitys] = useState([]);

  function handleBill(bl) {
    setBill(bl);
  }

  function handleMyServiceQuality(q) {
    setMyServiceQuality(q);
  }

  // Add friend to array
  function addFriend() {
    if (friendServiceQualitys.length < 3) {
      setFriendServiceQualitys((friends) => [...friends, '']);
      console.log(friendServiceQualitys);
    } else {
      alert('You can`t add more than 3 friends');
    }
  }

  function handleFriendServiceQualityChange(index, value) {
    setFriendServiceQualitys((prev) => {
      const newQualitys = [...prev];
      newQualitys[index] = value;
      return newQualitys;
    });
  }

  function handleRemoveFriend(indexToRemove) {
    setFriendServiceQualitys((prevQualities) =>
      prevQualities.filter((_, index) => index !== indexToRemove),
    );
  }

  function handleReset() {
    setBill('');
    setMyServiceQuality('');
    setFriendServiceQualitys([]);
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

      <button
        className="btn add-friend"
        onClick={addFriend}
        disabled={
          friendServiceQualitys.length >= 3 ||
          !Number(bill) ||
          myServiceQuality === '' ||
          myServiceQuality === '0' ||
          friendServiceQualitys.some((q) => q === '' || q === '0')
        }
      >
        Add a friend
      </button>
      {/* className={friendServiceQualitys.length > 1 && 'friends-container1'} */}
      <div>
        {friendServiceQualitys.map((quality, idx) => (
          <div className="friend-service-item" key={idx}>
            <Service
              service={quality}
              onServiceQuality={(value) => handleFriendServiceQualityChange(idx, value)}
              serviceId={`friend#${idx + 1}-service`}
            >
              {`How did friend ${idx + 1} like?`}
            </Service>
            <button className="remove-friend-btn" onClick={() => handleRemoveFriend(idx)}>
              x
            </button>
          </div>
        ))}
      </div>

      {bill > 0 && (
        <>
          <TotalTipAmount
            bill={bill}
            frService={friendServiceQualitys}
            myService={myServiceQuality}
          />

          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

export default App;
