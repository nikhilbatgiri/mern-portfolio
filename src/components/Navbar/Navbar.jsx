import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import Icon from 'react-icons-kit';
import {menu} from 'react-icons-kit/feather/menu';
import {arrowUpCircle} from 'react-icons-kit/feather/arrowUpCircle';
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
        <li><Link to='home' onClick={toggleMenu}>Home</Link></li>
        <li><Link to='about' onClick={toggleMenu}>About</Link></li>
        <li><Link to='skills' onClick={toggleMenu}>Skills</Link></li>
        <li><Link to='projects' onClick={toggleMenu}>Projects</Link></li>
        <li><Link to='contact' onClick={toggleMenu}>Contact</Link></li>
      </ul>
      <div className={styles.upHome}>
        <Link to='home' ><Icon icon={arrowUpCircle} size={32} /></Link>
      </div>
    </div>
  );
};

export default Navbar;
