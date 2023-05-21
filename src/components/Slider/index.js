/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames';
import styles from './index.css';

const Slider = ({ children }) => (
  <div className={cn(styles.tileWrapper)}>
    <div className={cn(styles.slider)}>
      {children}
    </div>
  </div>
);

export default Slider;
