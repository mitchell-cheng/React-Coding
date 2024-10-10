import React, { useState } from "react";

function Lightbox({ image, onClose }) {
  return (
    <div className="lightbox">
      <img src={image.url} alt={image.url} />
      <button onClick={onClose}>Close</button>
    </div>
  );
}

function ImageGallery() {
  const [images, setImages] = useState([
    { id: 1, url: "image1.jpg" },
    { id: 2, url: "image2.jpg" },
    { id: 3, url: "image3.jpg" },
  ]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const handleLightboxClose = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <img
              src={image.url}
              alt={image.url}
              onClick={() => handleImageSelect(image)}
            />
          </li>
        ))}
      </ul>
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={handleLightboxClose} />
      )}
    </div>
  );
}

export default ImageGallery;