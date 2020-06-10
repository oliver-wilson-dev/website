import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import sharedStyles from '../App/index.css';
import SectionTile from '../SectionTile';
import SectionSlider from '../SectionSlider';
import useFadeInClasses from '../../hooks/useFadeInClasses';

const Section = ({ title, children }) => {
  const { fadeInClasses } = useFadeInClasses();

  const childrenThatAreComponents = children.filter(child => (child.type instanceof Object));
  const childrenThatAreNotComponents = children.filter(child => !(child.type instanceof Object));

  return (
    <div className={cn(
      sharedStyles.flexColumn,
      sharedStyles.flexCenter,
      fadeInClasses
    )}
    >
      <h2 className={sharedStyles.sectionTitle}>{title}</h2>
      {childrenThatAreComponents.length
        ? (
          <SectionSlider>{childrenThatAreComponents}</SectionSlider>
        ) : null
      }
      {childrenThatAreNotComponents.length ? (
        <SectionTile>
          {childrenThatAreNotComponents}
        </SectionTile>
      ) : null}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Section;
