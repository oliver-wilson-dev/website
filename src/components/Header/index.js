import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import ThemeToggle from '../../containers/ThemeToggle';
import BurgerMenu from './burgerMenu.svg';
import SideNav from '../../containers/SideNav';

const Header = ({ toggleShowSideNav }) => (
  <nav
    className={styles.header}
  >
    <div className={styles.wrapper}>
      <ThemeToggle />
      <BurgerMenu className={styles.burgerMenu} onClick={toggleShowSideNav} />
    </div>
    <SideNav />
  </nav>
);

Header.propTypes = {
  toggleShowSideNav: PropTypes.func.isRequired
};


export default Header;
