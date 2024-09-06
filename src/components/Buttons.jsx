// Buttons.js
import React from 'react';
import useSound from 'use-sound';
import selectclick from "../assets/selectclick.mp3";

export default function Buttons({ moveDown, moveUp, onEnterPress, onBackPress  }) {
  const [play] = useSound(selectclick);

  return (
    <div>
      <button onClick={() => { moveUp(); play(); }} className='buttonMoveUp'></button>
      <button onClick={() => { moveDown(); play(); }} className='buttonMoveDown'></button>
      <button onClick={() => { onEnterPress(); play(); }} className='buttonEnter'></button>
      <button onClick={() => { onBackPress(); play(); }} className='buttonBack'></button>
    </div>
  );
}
