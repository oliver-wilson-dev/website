/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
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

  const onOverlayClick = () => {
    toggleMenu();
  };

  const ignoreClick = (event) => {
    event.stopPropagation();
  };

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

        onClick={onOverlayClick}
      >
        <div
          onClick={ignoreClick}
          className={styles.menuContent}
        >
          <CrossIcon
            className={cn(styles.crossIcon, {
              [styles.crossIconShow]: open
            })}
            onClick={toggleMenu}
          />
          <ul className={styles.menuList}>
            <Link to="/" className={styles.link} onClick={toggleMenu}>
              <li className={styles.menuItem}>
                Home
              </li>
            </Link>
            <Link to="/about" className={styles.link} onClick={toggleMenu}>
              <li className={styles.menuItem}>
                About
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Header;
