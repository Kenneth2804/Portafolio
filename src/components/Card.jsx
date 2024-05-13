import React from "react";

function Card({ imageUrl, onClick }) {
    return (
      <div className="card" onClick={onClick}>
        <img src={imageUrl} alt="Display" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    );
}

export default Card;
