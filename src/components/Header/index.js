import React from 'react';
import cn from 'classnames';
import styles from './index.css';
import ToggleSwitch from '../../containers/ToggleSwitch';

const Header = () => (
  <div
    className={cn(styles.header)}
  >
    <div className={cn(styles.wrapper)}>
      <ToggleSwitch />
    </div>
  </div>
);


export default Header;
