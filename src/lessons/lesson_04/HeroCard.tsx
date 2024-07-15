import React from 'react';
import styles from "./heroCard.module.css";

interface Hero {
  name: string;
  age: number;
  isDark: boolean;
  lightsaberColors: string[];
  image: string;
}

interface IHeroCardProps {
  hero: Hero;
}

const HeroCard = ({ hero }: IHeroCardProps) => {
  return (
    <div className={`${styles.card} ${hero.isDark ? styles.dark : styles.light}`}>
      <h4>{hero.name}</h4>
      <p>Age: {hero.age}</p>
      <img width={200} src={hero.image} alt={hero.name} />
      <p>
        Lightsaber colors:{" "}
        {hero.lightsaberColors.map((color, colorIndex) => (
          <span
            key={colorIndex}
            className={styles.lightsaberColor}
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </p>
    </div>
  );
};

export default HeroCard;

