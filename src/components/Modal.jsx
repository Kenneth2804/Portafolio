import React from 'react';
import '../assets/modal.css';  // Ensure modal CSS styles are defined here

function Modal({ isOpen, content, onClose }) {
  if (!isOpen) return null;

  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <button className="close-button" onClick={onClose}>×</button>
        <a href={content.url} target="_blank" rel="noopener noreferrer">
          <img src={content.src} alt="Modal pic" style={{ maxWidth: '100%', height: 'auto' }} />
        </a>
        <div className="modal-description">
          <p className='modaltext'>{content.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
