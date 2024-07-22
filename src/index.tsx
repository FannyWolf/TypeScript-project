// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FormGender from './components/formGender/FormGender';
//import Lesson13 from './lessons/lesson_13/Lesson13';
import {HashRouter, Route, Routes } from 'react-router-dom';
import StarWarsGallery from './lessons/lesson_04/StarWarsGallery';
import Layout from './components/layout/Layout';
import RobotForm from './components/robotForm/RobotForm';
import MyForm from './components/myForm/MyForm';
import Counter from './components/counter/Counter';
import Feedback from './components/feedback/Feedback';
import HomePage from './components/homepage/Homepage';
import Shop from './components/shop/Shop';
import RickAstley from './components/rickAstley/RickAstley';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
      <Route path='/' element={<HomePage />} />
      <Route path='star-wars-gallery' element={<StarWarsGallery />} />
      <Route path='/gender-form' element={<FormGender />} />
      <Route path='/robot-form' element={<RobotForm />} />
      <Route path='/my-form' element={<MyForm />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/feedback' element={<Feedback />} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='*' element={<div className='lesson-container'><h1>ERROR 404 ☠️</h1> <RickAstley/></div> } />
      {/* <StarWarsGallery  */}
      {/* <FormGender /> */}
      {/* <Lesson13 /> */}
    </Route>
    </Routes>
  </HashRouter>
);



