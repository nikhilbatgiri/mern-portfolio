import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import Icon from 'react-icons-kit';
import {menu} from 'react-icons-kit/feather/menu';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}>
      <div className={styles.logo}>Welcome!</div>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <Icon icon={menu} size={28}/>
      </div>
      <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
        <li><Link to='home'>Home</Link></li>
        <li><Link to='about'>About</Link></li>
        <li><Link to='skills'>Skills</Link></li>
        <li><Link to='projects'>Projects</Link></li>
        <li><Link to='contact'>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
