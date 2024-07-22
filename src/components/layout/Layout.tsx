import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import styles from './layout.module.css';

export default function Layout() {
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



