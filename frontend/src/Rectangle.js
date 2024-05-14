import React from 'react';
import './Rectangle.css';

const Rectangle = ({ onMove }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setDragImage(new Image(), 0, 0); 
  };

  const handleDrag = (e) => {
    const newX = e.clientX;
    const newY = e.clientY;
    onMove({ x: newX, y: newY }); 
  };

  return (
    <div
      className="rectangle"
      draggable="true"
      onDragStart={handleDragStart}
      onDrag={(e) => handleDrag(e)}
    >
      R
    </div>
  );
};

export default Rectangle;
