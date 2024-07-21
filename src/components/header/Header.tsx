import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.css';

const links = [
  { to: '/', label: 'HomePage' },
  { to: '/star-wars-gallery', label: 'Star Wars Gallery' },
  { to: '/gender-form', label: 'Gender Form' },
  { to: '/robot-form', label: 'Robot Form' },
  { to: '/my-form', label: 'Form Example' },
  { to: '/counter', label: 'Counter' },
  { to: '/feedback', label: 'Feedback' },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      {links.map(link => (
        <Link
          key={link.to}
          className={location.pathname === link.to ? styles.active : ''}
          to={link.to}
        >
          {link.label}
        </Link>
      ))}
    </header>
  );
}
