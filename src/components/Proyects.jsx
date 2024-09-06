import React, { useRef, useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import Buttons from './Buttons';
import Back from './Back';
import image1 from "../assets/pics/image1.PNG";
import image2 from "../assets/pics/image2.png";
import image3 from "../assets/pics/image3.png";
import image5 from "../assets/pics/image5.png";
import image6 from "../assets/pics/image6.png";
import image7 from "../assets/pics/image7.png";
import image8 from "../assets/pics/image8.png";
import image9 from "../assets/pics/image9.png";
import image10 from "../assets/pics/image10.png";
import image11 from "../assets/pics/image11.PNG";
import image12 from "../assets/pics/image12.PNG";
import image13 from "../assets/pics/social.PNG";

function Proyects() {
  const imageData = [
    { src: image1, description: "This project is a full-stack web application utilizing Node.js on the backend and React on the frontend. The backend is powered by Node.js and Express, which handle the server setup and API endpoints, while Sequelize is used as an ORM for efficient database operations. Security is a priority, with libraries such as jsonwebtoken for authentication and bcrypt for password hashing. For development convenience, tools like nodemon for hot reloading and mocha for testing are integrated. On the frontend, React manages the user interface, enhanced by Redux for state management across the app. User authentication is streamlined through Auth0, and Axios facilitates HTTP requests to the backend. Additional features include SweetAlert2 for custom alerts and web vitals to track application performance, ensuring a robust, secure, and user-friendly experience.", url: "https://github.com/Kenneth2804/SN" },
    { src: image2, description: "Design and develop an Ecommerce of sports products that included: Deploy in Heroku and Vercel, Third Party Authentication (Auth0), Payment Gateway (Stripe), Combined Filters, Cloudinary, Notifications (Nodemailer), Logical Deletion, Data Persistence, Reviews and Managed Dashboard, using for the Front: React, Redux,pure Css and for the Back developed in Node.js with Express.", url: "https://kustoms-sports.vercel.app/" },
    { src: image5, description: "A Sample of Web Page created with React Js and CSS.", url: "https://challenge-rust-ten.vercel.app/" },
    { src: image3, description: "Design and develop a recipe App that included: searches, filters, sorts and creation of the same, using for the Front: React, Redux, pure Css and for the Back developed in Node.js with Express.", url: "https://food-nu-murex.vercel.app/" },
    { src: image13, description: "This project involves the development of a full-stack web application with a distinct frontend and backend architecture. The frontend, named client, is built using React, enabling dynamic user interfaces with state management provided by Redux. Key functionalities like user authentication are managed through Auth0, and both testing and development processes are streamlined with React Scripts and the React testing library. Additionally, the application integrates with external services like Firebase for backend database solutions and Cloudinary for media storage, enhancing its capabilities. On the backend, labeled api, the application uses Node.js with the Express framework to set up and manage server-side operations. It incorporates Sequelize for database management, which interacts seamlessly with PostgreSQL, and utilizes libraries such as Axios for HTTP requests and Nodemailer for handling email operations. The backend also includes essential middleware like body-parser for parsing incoming request bodies, cookie-parser for managing cookies, and CORS for cross-origin resource sharing. Security and environment configurations are managed via Dotenv.", url: "https://social-coral.vercel.app/" },
    { src: image6, description: "Pong Game Created on Javascript", url: "https://pong-kohl.vercel.app/" },
    { src: image7, description: "Snake Game Created on Javascript", url: "https://snakegame-sage.vercel.app/" },
    { src: image8, description: "Memory Game Created on Javascript", url: "https://momorama.vercel.app/" },
    { src: image9, description: "Guess the Phrase Game created on Javascript", url: "https://el-ahorcado-omega.vercel.app/" },
    { src: image10, description: "TIK TAK TOE Game Created on Javascript", url: "https://tiktaktoe-jade.vercel.app/" },
    { src: image11, description: "Buscaminas Game created on Javascript", url: "https://buscaminas-virid.vercel.app/" },
    { src: image12, description: "Real Time Chat created on Javascript", url: "https://chat-js-liard.vercel.app/" },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null); 

  const cardRefs = useRef([]);

  const handleImageClick = (data, index) => {
    setModalContent(data);
    setModalOpen(true);
    setSelectedCardIndex(index);
  };

  const moveUp = () => {
    setSelectedOptionIndex((prevIndex) => {
      const newIndex = Math.max(0, prevIndex - 1);
      setSelectedCardIndex(newIndex);
      if (cardRefs.current[newIndex]) {
        cardRefs.current[newIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return newIndex;
    });
  };
  
  const moveDown = () => {
    setSelectedOptionIndex((prevIndex) => {
      const newIndex = Math.min(imageData.length - 1, prevIndex + 1);
      setSelectedCardIndex(newIndex);
      if (cardRefs.current[newIndex]) {
        cardRefs.current[newIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return newIndex;
    });
  };
  
  

  const handleEnterPress = () => {
    const selectedOption = imageData[selectedOptionIndex];
    window.open(selectedOption.url, '_blank'); 
  };

  const handleBackPress = () => {
    window.location.href = '/';
  };

  return (
    <>
    <div className="project-container">
      <Modal isOpen={modalOpen} content={modalContent} onClose={() => setModalOpen(false)} />
      <div className="cards">
        {imageData.map((data, index) => (
         <Card 
         key={index} 
         imageUrl={data.src} 
         description={data.description} 
         onClick={() => handleImageClick(data, index)} 
         isSelected={selectedCardIndex === index} 
         ref={(el) => (cardRefs.current[index] = el)}
       />
       
        ))}
      </div>
    </div>
      <Buttons moveUp={moveUp} moveDown={moveDown} onEnterPress={handleEnterPress} onBackPress={handleBackPress} />
        </>
  );
}

export default Proyects;
