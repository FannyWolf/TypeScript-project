import React from 'react';
import styles from './lesson04.module.css';
import { forceUsers } from './data'
import HeroCard from './HeroCard';

const StarWarsGallery = () => {
    return (
      <div className={styles.lessonContainer}>
        <h3>Star Wars Gallery</h3>
        {forceUsers.map((hero, index) => (
          <HeroCard key={index} hero={hero} />
        ))}
      </div>
    );
  };
  
  export default StarWarsGallery;
