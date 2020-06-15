import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import styles from './index.css';
import ThemeToggle from '../../containers/ThemeToggle';
import BurgerMenu from './burgerMenu.svg';
import CrossIcon from '../Icons/cross.svg';
import { preventScroll, allowScroll } from '../../utils';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const isFirstRender = useRef(true);

  const toggleMenu = () => {
    const burgerMenuNotYetClicked = !open && !close;

    if (burgerMenuNotYetClicked) {
      setOpen(true);
      setClose(false);
    } else {
      setOpen(!open);
      setClose(!close);
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else if (open) {
      preventScroll();
    } else { allowScroll(); }
  }, [open]);

  return (
    <nav
      className={cn(styles.header)}
    >
      <div className={cn(styles.wrapper)}>
        <ThemeToggle />
        <BurgerMenu className={styles.burgerMenu} onClick={toggleMenu} />
      </div>
      <div
        className={cn(styles.menuContainer, {
          [styles.menuOpen]: open,
          [styles.menuClose]: close && !open,
          [styles.menuHideFirstRender]: isFirstRender.current
        })}
      >
        <div
          className={styles.menuContent}
        >
          <CrossIcon
            className={cn(styles.crossIcon, {
              [styles.crossIconShow]: open
            })}
            onClick={toggleMenu}
          />
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              Home
            </li>
            <li className={styles.menuItem}>
              About
            </li>
            <li className={styles.menuItem}>
              Education
            </li>
            <li className={styles.menuItem}>
              Experience
            </li>
          </ul>
        </div>


      </div>
    </nav>
  );
};


export default Header;
