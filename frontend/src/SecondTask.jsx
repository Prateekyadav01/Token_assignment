import React, { useState, useEffect } from 'react';
import './App.css';

function SecondTask() {
  const [data, setData] = useState({ counter: 0, randomString: '' });

  useEffect(() => {
 
    const ws = new WebSocket('ws://localhost:5000');

   
    ws.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData(newData);
    };

   
    return () => {
      ws.close();
    };
  }, []);

  const fetchData = async () => {

    const response = await fetch('http://localhost:5000/api/data');
    const newData = await response.json();
    setData(newData);
  };

  return (
    <div className="App">
      <h1>Real-time Data from Server</h1>
      <div>
        <p>Counter: {data.counter}</p>
        <p>Random String: {data.randomString}</p>
      </div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default SecondTask;
