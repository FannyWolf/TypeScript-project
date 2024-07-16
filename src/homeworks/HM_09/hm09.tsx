import React, { useState, useEffect } from 'react';

const RandomFox = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    
    const fetchRandomFox = async () => {
      try {
        const response = await fetch('https://randomfox.ca/floof/');
        const data = await response.json();
        setImageUrl(data.image);
      } catch (error) {
        console.error('Error fetching the random fox image:', error);
      }
    };

    
    fetchRandomFox();
  }, []); 
  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Random Fox" style={{ width: '300px', height: 'auto' }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RandomFox;
