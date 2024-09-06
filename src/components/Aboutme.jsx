// Aboutme.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/home.css';
import Buttons from './Buttons';
import Encender from './Encender';
import { useVisibility } from './VisibilityContext';

function Aboutme() {
  const navigate = useNavigate();
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const { contentVisible, toggleContentVisibility } = useVisibility();


  const handleBackPress = () => {
    navigate('/');
  };

  return (
    <div>
      <Encender toggleVisibility={toggleContentVisibility} />
      {contentVisible && (
        <header className="noisy glitch">
          <h1>ABOUT ME</h1>
          <p>
            Software Development Technician with training in HTML, CSS, JavaScript, React, Redux, Node Js,
            Express, Sequelize, PostgreSQL. Bachelor of Forensic Sciences with training in Cybersecurity,
            Psychology, Law, Chemistry, Criminalistics, among other branches. Person with creative thinking,
            problem solving, teamwork, communication and autonomy
          </p>
        </header>
      )}
      <Buttons onBackPress={handleBackPress} />
    </div>
  );
}

export default Aboutme;
