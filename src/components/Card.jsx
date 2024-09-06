import React from "react";

function Card({ imageUrl, onClick, isSelected }) {
  return (
    <div
      className="card"
      onClick={onClick}
      style={{
        border: isSelected ? '4px solid red' : 'none',
        boxShadow: isSelected ? 'none' : '0 0 10px #000000',  
      }}
      
          >
      <img src={imageUrl} alt="Display" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
}

export default Card;
