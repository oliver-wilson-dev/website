import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import sharedStyles from '../App/index.css';
import styles from './index.css';
import SectionSlider from '../SectionSlider';
import useFadeInClasses from '../../hooks/useFadeInClasses';

const Section = ({ title, children, additionalStyles = {} }) => {
  const { fadeInClasses } = useFadeInClasses();

  const childrenThatAreComponents = children.filter(child => (child.type instanceof Object));
  const childrenThatAreNotComponents = children.filter(child => !(child.type instanceof Object));

  return (
    <section className={cn(
      styles.flexColumn,
      sharedStyles.flexCenter,
      fadeInClasses,
      { [additionalStyles.section]: !!additionalStyles.section, }
    )}
    >
      {title && <h2 className={styles.sectionTitle}>{title}</h2>}
      {childrenThatAreComponents.length
        ? (
          <SectionSlider>{childrenThatAreComponents}</SectionSlider>
        ) : null
      }
      {childrenThatAreNotComponents.length ? (
        <div className={additionalStyles.container}>
          {childrenThatAreNotComponents}
        </div>
      ) : null}
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
