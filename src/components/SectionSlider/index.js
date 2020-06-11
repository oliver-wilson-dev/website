/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import SectionTile from '../SectionTile';
import styles from './index.css';
import sectionStyles from '../SectionTile/index.css';
import LeftArrow from './left-arrow.svg';
import RightArrow from './right-arrow.svg';


const SectionSlider = ({ children }) => {
  const [currentSelectedIndex, setCurrentSelectedIndex] = useState(0);

  const firstElementSelected = currentSelectedIndex === 0;

  const lastElementSelected = currentSelectedIndex === children.length - 1;

  const increment = () => {
    if (!lastElementSelected) {
      setCurrentSelectedIndex(currentSelectedIndex + 1);
    }
  };
  const decrement = () => {
    if (!firstElementSelected) {
      setCurrentSelectedIndex(currentSelectedIndex - 1);
    }
  };

  return (
    <React.Fragment>
      <div className={styles.buttonWrapper}>

        <LeftArrow
          className={cn(styles.arrowBtn, {
            [styles.btnDisabled]: firstElementSelected
          })}
          onClick={decrement}
        />


        <RightArrow
          className={cn(styles.arrowBtn, {
            [styles.btnDisabled]: lastElementSelected
          })}
          onClick={increment}
        />
      </div>
      <div className={cn(styles.tileContainer, sectionStyles.displayBox)}>
        { children.map((child, index) => {
          const props = {
            additionalStyles: {
              [styles.removeBorder]: true,
              [styles.tileOnScreen]: index === currentSelectedIndex,
              [styles.offScreenTileRight]: index > currentSelectedIndex,
              [styles.offScreenTileLeft]: index < currentSelectedIndex
            }
          };

          return (
            <SectionTile key={index} {...props}>
              {child}
            </SectionTile>
          );
        })}
      </div>
    </React.Fragment>
  );
};

SectionSlider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default SectionSlider;
