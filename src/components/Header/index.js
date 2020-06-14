import React from 'react';
import cn from 'classnames';
import styles from './index.css';
import ThemeToggle from '../../containers/ThemeToggle';

const Header = () => (
  <nav
    className={cn(styles.header)}
  >
    <div className={cn(styles.wrapper)}>
      <ThemeToggle />
    </div>
  </nav>
);


export default Header;
