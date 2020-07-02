/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Link } from 'react-router-dom';
import styles from './index.css';
import headerStyles from '../Header/index.css';

import CrossIcon from '../Icons/cross.svg';
import DownloadButton from '../DownloadButton';
import { preventScroll, allowScroll } from '../../utils';

const ignoreClick = (event) => {
  event.stopPropagation();
};

const SideNav = ({ showSideNav, toggleShowSideNav }) => {
  const isFirstRender = useRef(true);


  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else if (showSideNav) {
      preventScroll();
    } else {
      allowScroll();
    }
  }, [showSideNav]);

  const onOverlayClick = () => {
    toggleShowSideNav();
  };


  return (
    <div
      className={cn(styles.menuContainer, {
        [styles.menuOpen]: showSideNav,
        [styles.menuClose]: !showSideNav,
        [styles.menuHideFirstRender]: isFirstRender.current
      })}
      onClick={onOverlayClick}
    >
      <div
        onClick={ignoreClick}
        className={styles.menuContent}
      >
        <CrossIcon
          className={cn(styles.crossIcon, headerStyles.icon, {
            [styles.crossIconShow]: showSideNav
          })}
          onClick={toggleShowSideNav}
        />
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link to="/" className={cn(styles.link, styles.menuItemMargin)} onClick={toggleShowSideNav}>
              Home
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/about" className={cn(styles.link, styles.menuItemMargin)} onClick={toggleShowSideNav}>
              About
            </Link>
          </li>
          <li className={cn(styles.menuItem, styles.menuItemMargin, styles.menuItemNoHover)}>
            <DownloadButton />
          </li>
        </ul>
      </div>
    </div>
  );
};

SideNav.propTypes = {
  showSideNav: PropTypes.bool.isRequired,
  toggleShowSideNav: PropTypes.func.isRequired,
};

export default SideNav;
