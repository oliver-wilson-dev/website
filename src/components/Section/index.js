import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import sharedStyles from '../App/index.css';
import styles from './index.css';
import useFadeInClasses from '../../hooks/useFadeInClasses';

const Section = ({ title, children, additionalStyles = {} }) => {
  const { fadeInClasses } = useFadeInClasses();

  return (
    <section className={cn(
      styles.flexColumn,
      sharedStyles.flexCenter,
      fadeInClasses,
      { [additionalStyles.section]: !!additionalStyles.section, }
    )}
    >
      {title && <h2 className={styles.sectionTitle}>{title}</h2>}
      <div className={additionalStyles.container}>
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  additionalStyles: PropTypes.oneOfType([
    PropTypes.shape()
  ])
};

export default Section;
