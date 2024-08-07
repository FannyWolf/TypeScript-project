import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import FormGender from './components/formGender/FormGender';
import Layout from './components/layout/Layout';
import MyForm from './components/myForm/MyForm';
import RobotForm from './components/robotForm/RobotForm';
import StarWarsGallery from './lessons/lesson_04/StarWarsGallery';
import './index.css';
import Shop from './components/shop/Shop';
import ProductPage from './components/productPage/ProductPage';
import { Provider } from 'react-redux';
import { store } from './components/redax/store';
import Login from './components/login/Login';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<ProtectedRoute outlet={<StarWarsGallery />} />} />
          <Route path='/shop' element={<ProtectedRoute outlet={<Shop />} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/shop/:id' element={<ProtectedRoute outlet={<ProductPage />} />} />
          <Route path='/gender-form' element={<ProtectedRoute outlet={<FormGender />} />} />
          <Route path='/robot-form' element={<ProtectedRoute outlet={<RobotForm />} />} />
          <Route path='/my-form' element={<ProtectedRoute outlet={<MyForm />} />} />
          <Route path='*' element={<h1>Error 404 😵</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  </Provider>
);


