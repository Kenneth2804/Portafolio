// Social.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/home.css';
import { useVisibility } from './VisibilityContext';
import Buttons from './Buttons';
import Encender from './Encender';

function Social() {
  const navigate = useNavigate();
  const { contentVisible, toggleContentVisibility } = useVisibility();
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const options = [
    { name: 'GitHub', url: 'https://github.com/Kenneth2804' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kenneth-flores-calvillo/' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100087748970250' },
    { name: 'Instagram', url: 'https://www.instagram.com/kenneth28_89/' }
  ];

  const moveUp = () => {
    setSelectedOptionIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const moveDown = () => {
    setSelectedOptionIndex((prevIndex) => Math.min(options.length - 1, prevIndex + 1));
  };

  const handleEnterPress = () => {
    const selectedOption = options[selectedOptionIndex];
    window.location.href = selectedOption.url; // Cambia navigate(url) a window.location.href para enlaces externos
  };

  const handleBackPress = () => {
    navigate('/');
  };

  const handleKeyDown = (event, url) => {
    if (event.key === 'Enter') {
      window.location.href = url; // Cambia navigate(url) a window.location.href para enlaces externos
    }
  };

  return (
    <div>
      <Encender toggleVisibility={toggleContentVisibility} />
      {contentVisible && (
        <header className="noisy glitch">
          <h1>SOCIAL MEDIA</h1>
          <ul>
            {options.map((option, index) => (
              <li key={index} className="listaHome">
                <a
                  href={option.url}
                  onKeyDown={(e) => handleKeyDown(e, option.url)}
                  style={{
                    color: index === selectedOptionIndex ? 'red' : 'gray',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    lineHeight: '1.3'
                  }}
                  tabIndex="0"
                >
                  {option.name}
                </a>
              </li>
            ))}
          </ul>
        </header>
      )}
      <Buttons moveUp={moveUp} moveDown={moveDown} onEnterPress={handleEnterPress} onBackPress={handleBackPress} />
    </div>
  );
}

export default Social;
