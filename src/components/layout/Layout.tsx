import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import styles from './layout.module.css';
import { useAppDispatch } from '../redax/hooks';
import { getUserWithToken } from '../../features/auth/authAction';

export default function Layout() {
   const dispatch = useAppDispatch()

  useEffect(() => {
    const token = localStorage.getItem('user-token')

    if (token !== null) {
      dispatch(getUserWithToken(token))
    }
    
  }, []);


  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Outlet/>
      </main>
      <Footer /> 
    </div>
  );
}



