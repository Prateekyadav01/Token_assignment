import React, { useState } from 'react';
import './App.css';
import Rectangle from './Rectangle';
import Circle from './Circle';
import SecondTask from './SecondTask';

function App() {
  const [rectanglePosition, setRectanglePosition] = useState({ x: 50, y: 50 });

  const handleRectangleMove = (newPosition) => {
    setRectanglePosition(newPosition); 
  };

  return (
    // for first tast
    // <div className="app">
    //   <Rectangle onMove={handleRectangleMove} />
    //   <Circle rectanglePosition={rectanglePosition} />
    // </div>


// for second task use this component and comment the upper component
<SecondTask/>
  );
}

export default App;
