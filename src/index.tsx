// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StarWarsGallery from './lessons/lesson_04/StarWarsGallery';
import Lesson10 from './lessons/lesson_10/Lesson10';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    {/*<StarWarsGallery />*/}
    <Lesson10 />
  </>
);



