import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import sharedStyles from '../App/index.css';
import styles from './index.css';
import SectionSlider from '../SectionSlider';
import useFadeInClasses from '../../hooks/useFadeInClasses';

const Section = ({ title, children }) => {
  const { fadeInClasses } = useFadeInClasses();

  const childrenThatAreComponents = children.filter(child => (child.type instanceof Object));
  const childrenThatAreNotComponents = children.filter(child => !(child.type instanceof Object));

  return (
    <div className={cn(
      styles.flexColumn,
      sharedStyles.flexCenter,
      fadeInClasses
    )}
    >
      <h2 className={styles.sectionTitle}>{title}</h2>
      {childrenThatAreComponents.length
        ? (
          <SectionSlider>{childrenThatAreComponents}</SectionSlider>
        ) : null
      }
      {childrenThatAreNotComponents.length ? (
        <div>
          {childrenThatAreNotComponents}
        </div>
      ) : null}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Section;
