import React, { useState, useEffect } from 'react';

function TextAnimation() {
  const [opacity, setOpacity] = useState(0);
  const [yPosition, setYPosition] = useState(20);

  const animateText = () => {
    setOpacity((prevOpacity) => prevOpacity + 0.1);
    setYPosition((prevYPosition) => prevYPosition - 1);
  };

  useEffect(() => {
    const animationInterval = setInterval(animateText, 50);
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <p
      style={{
        opacity,
        transform: `translateY(${yPosition}px)`,
        transition: 'opacity 0.5s, transform 0.5s',
      }}
    >
      Animated Text
    </p>
  );
}

export default TextAnimation;