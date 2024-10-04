import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [timer, setTimer] = useState(10); // initial timer duration
  const [playAudio, setPlayAudio] = useState(false);

  const handleTimerUpdate = () => {
    setTimer((prevTimer) => prevTimer - 1);
    if (timer === 0) {
      setPlayAudio(true);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(handleTimerUpdate, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const playAudioCue = () => {
    const audio = new Audio('audio_file.mp3'); // replace with your audio file
    audio.play();
  };

  return (
    <div>
      <p>Countdown: {timer}</p>
      {playAudio && playAudioCue()}
    </div>
  );
}

export default CountdownTimer;