import React, { useEffect, useState } from 'react';
import './Circle.css';

const Circle = ({ rectanglePosition }) => {
  const [circleSize, setCircleSize] = useState(20);

  useEffect(() => {
    const newSize = 20 + (rectanglePosition.x - 50) / 5; 
    setCircleSize(newSize);
  }, [rectanglePosition]);

  return (
    <div className="circle" style={{ width: circleSize, height: circleSize }}>
      C
    </div>
  );
};

export default Circle;
