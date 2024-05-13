import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/home.css';
import Buttons from './Buttons';
import Encender from './Encender';
import Back from './Back';

function Aboutme() {
  const navigate = useNavigate();
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
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
  
        <header className="noisy glitch">
          <h1>ABOUT ME</h1>
        <p>Software Development Technician with training in HTML, CSS, JavaScript, React, Redux, Node Js,
Express, Sequelize, PostgreSQL. Bachelor of Forensic Sciences with training in Cybersecurity,
Psychology, Law, Chemistry, Criminalistics, among other branches. Person with creative thinking,
problem solving, teamwork, communication and autonomy </p>
        </header>
<Back></Back>
    </div>
  );
}

export default Aboutme;
