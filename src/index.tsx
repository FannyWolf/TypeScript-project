// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StarWarsGallery from './lessons/lesson_04/StarWarsGallery';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <StarWarsGallery />
  </>
);



