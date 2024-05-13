// Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/home.css';
import Buttons from './Buttons';
import Encender from './Encender';
import { useVisibility } from './VisibilityContext';

function Home() {
  const navigate = useNavigate();
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const { contentVisible, toggleContentVisibility } = useVisibility(); // Corregido aquí
  const options = [
    { name: 'About me', path: '/aboutme' },
    { name: 'Projects', path: '/proyects' },
    { name: 'Social', path: '/social' }
  ];

  const moveUp = () => {
    setSelectedOptionIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const moveDown = () => {
    setSelectedOptionIndex((prevIndex) => Math.min(options.length - 1, prevIndex + 1));
  };

  const handleKeyDown = (event, path) => {
    if (event.key === 'Enter') {
      navigate(path);
    }
  };

  return (
    <div>
       <Encender toggleVisibility={toggleContentVisibility} /> {/* Usar la función correcta */}
      {contentVisible && (
        <header className="noisy glitch">
          <h1>HOME</h1>
          <h4>SELECT AN OPTION</h4>
          <ul>
            {options.map((option, index) => (
              <li key={index} className='listaHome'>
                <a 
                  href={option.path}
                  onKeyDown={(e) => handleKeyDown(e, option.path)}
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
      <Buttons moveUp={moveUp} moveDown={moveDown}></Buttons>
    </div>
  );
}

export default Home;
