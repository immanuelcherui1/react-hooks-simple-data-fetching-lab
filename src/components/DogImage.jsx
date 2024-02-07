import React, { useEffect, useState } from 'react';

function DogImage() {
  const [image, setImage] = useState(null)
  
  useEffect(() => {
  fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(data => setImage(data.image))
  }, [])
  
  if (!image) {
      return <p> Loading... </p>
  }
  
  return <img src={image} alt="A Random Dog" />;
}

export default DogImage;
