import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.css';
import sharedStyles from '../App/index.css';

const Section = ({ title, children }) => (
  <div className={cn(sharedStyles.flexColumn, sharedStyles.flexCenter)}>
    <h2 className={sharedStyles.sectionTitle}>{title}</h2>
    <div className={(cn(styles.landingBlurb, styles.displayBox))}>
      {children}
    </div>
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Section;
