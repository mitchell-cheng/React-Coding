import React, { useState } from 'react';

function TextArtGenerator() {
  const [input, setInput] = useState('');
  const [textArt, setTextArt] = useState('');

  const generateTextArt = () => {
    const text = input.split('');
    const art = [];
    for (let i = 0; i < text.length; i++) {
      art.push(<span style={{ fontSize: (i + 1) * 10 }}>{text[i]}</span>);
    }
    setTextArt(art);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    generateTextArt();
  };

  return (
    <div>
      <input value={input} onChange={handleInputChange} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {textArt}
      </div>
    </div>
  );
}

export default TextArtGenerator;