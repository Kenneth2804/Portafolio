import React from 'react';
import useSound from 'use-sound'; 
import title from "../assets/title.mp3"

function Encender({ toggleVisibility }) {
  const [play] = useSound(title);

  return (
    <button onClick={() => { toggleVisibility(); play(); }} className='on'></button>
  );
}

export default Encender;