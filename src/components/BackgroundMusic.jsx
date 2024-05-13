import React, { useEffect } from 'react';

const BackgroundMusic = () => {
  useEffect(() => {
    const audio = document.getElementById('background-music');
    audio.play();
  }, []);

  return (
    <audio id="background-music" loop autoPlay>
      <source src="/path_to_your_audio_file.mp3" type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundMusic;
