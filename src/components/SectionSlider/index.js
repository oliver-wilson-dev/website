/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import SectionTile from '../SectionTile';
import styles from './index.css';
import sectionStyles from '../SectionTile/index.css';
import LeftArrow from './left-arrow.svg';
import RightArrow from './right-arrow.svg';


const SectionSlider = ({ children }) => {
  const [currentSelectedIndex, setCurrentSelectedIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const firstElementSelected = currentSelectedIndex === 0;

  const lastElementSelected = currentSelectedIndex === children.length - 1;

  const increment = useCallback(() => {
    if (!lastElementSelected) {
      setCurrentSelectedIndex(currentSelectedIndex + 1);
    }
    setTouchStart(null);
    setTouchEnd(null);
  }, [currentSelectedIndex, lastElementSelected]);

  const decrement = useCallback(() => {
    if (!firstElementSelected) {
      setCurrentSelectedIndex(currentSelectedIndex - 1);
    }
    setTouchStart(null);
    setTouchEnd(null);
  }, [currentSelectedIndex, firstElementSelected]);

  const onTouchStart = useCallback((e) => {
    e.stopPropagation();
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback((e) => {
    e.stopPropagation();
    setTouchEnd(e.changedTouches[0].clientX);
  }, []);

  useEffect(() => {
    if (touchStart !== null && touchEnd !== null) {
      if (touchStart - touchEnd > 75) {
        increment();
      }

      if (touchStart - touchEnd < -75) {
        decrement();
      }
    }
  }, [touchStart, touchEnd, increment, decrement]);

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
      <div
        className={cn(
          styles.tileContainer,
          sectionStyles.displayBox
        )}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        { children.map((child, index) => {
          const props = {
            border: true,
            additionalStyles: {
              [styles.setWidth]: true,
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
