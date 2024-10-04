import React, { useState } from "react";

function MemeGenerator() {
  const [image, setImage] = useState("");
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [meme, setMeme] = useState("");

  const handleGenerateMeme = () => {
    const memeImage = new Image();
    memeImage.src = image;
    const canvas = document.createElement("canvas");
    canvas.width = memeImage.width;
    canvas.height = memeImage.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(memeImage, 0, 0);
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.font = "30px Impact";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(topText, canvas.width / 2, canvas.height / 2 - 50);
    ctx.fillText(bottomText, canvas.width / 2, canvas.height / 2 + 50);
    setMeme(canvas.toDataURL());
  };

  return (
    <div>
      <form>
        <input value={image} onChange={(e) => setImage(e.target.value)} />
        <input value={topText} onChange={(e) => setTopText(e.target.value)} />
        <input
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
        <button onClick={handleGenerateMeme}>Generate Meme</button>
      </form>
      <img src={meme} alt="Generated Meme" />
    </div>
  );
}

export default MemeGenerator;