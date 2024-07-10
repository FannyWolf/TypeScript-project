import React from 'react';
import "./heroCard.css";

const HeroCard = ({ hero }) => {
  
  return (
    <div className={`card ${hero.isDark ? "dark" : "light"}`}>
      <h4>{hero.name}</h4>
      <p>Age: {hero.age}</p>
      <img width={200} src={hero.image} alt={hero.name} />
      <p>
        Lightsaber colors:{" "}
        {hero.lightsaberColors.map((color, colorIndex) => (
          <span
            key={colorIndex}
            className="lightsaber-color"
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </p>
    </div>
  );
};

export default HeroCard;


