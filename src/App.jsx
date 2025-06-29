import { useState } from 'react';

import './App.css';

import Bill from './components/Bill';
import Service from './components/Service';
import TotalTipAmount from './components/TotalTipAmount';
import Reset from './components/reset';

function App() {
  const [bill, setBill] = useState('');
  const [myServiceQuality, setMyServiceQuality] = useState('0');
  // const [friendQnt, setFriendQnt] = useState(0);
  // const [friendService, addFriendService] = useState([]);
  const [friendServiceQualitys, setFriendServiceQualitys] = useState([]);

  function handleBill(bl) {
    setBill(Number(bl));
  }

  function handleMyServiceQuality(q) {
    setMyServiceQuality(q);
  }

  // Add friend to array
  function addFriend() {
    if (friendServiceQualitys.length < 3) {
      setFriendServiceQualitys((friends) => [...friends, '0']);
      console.log(friendServiceQualitys);
    } else {
      alert('You can`t add more than 6 friends');
    }
  }

  // function handleAddFriendService() {
  //   addFriendService((prev) => [...prev, '']);
  // }

  // function handleFriendServiceQualitys(q) {
  //   setFriendServiceQualitys(Number(q));
  // }

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

  // console.log(typeof bill, typeof myServiceQuality, typeof friendServiceQuality);
  function handleReset() {
    setBill('');
    setMyServiceQuality('0');
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

      <button className="btn add-friend" onClick={addFriend}>
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
      {/* <Service
        service={friendServiceQuality}
        onServiceQuality={handleFriendServiceQuality}
        serviceId="friend#1-service"
      >
        How did friend like?
      </Service> */}

      <TotalTipAmount bill={bill} frService={friendServiceQualitys} myService={myServiceQuality} />

      <Reset onReset={handleReset} />
    </div>
  );
}

export default App;
