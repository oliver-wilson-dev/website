import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.css';
import sharedStyles from '../App/index.css';
import SectionTile from '../SectionTile';

const Section = ({ title, children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const childrenThatAreComponents = children.filter(child => (child.type instanceof Object));
  const childrenThatAreNotComponents = children.filter(child => !(child.type instanceof Object));

  return (
    <div className={cn(
      sharedStyles.flexColumn,
      sharedStyles.flexCenter,
      styles.section, {
        [styles.show]: visible
      }
    )}
    >
      <h2 className={sharedStyles.sectionTitle}>{title}</h2>
      {childrenThatAreComponents.length
        ? (
          <div className={styles.tileContainer}>
            { childrenThatAreComponents
              .map((child, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <SectionTile key={index}>
                  {child}
                </SectionTile>
              ))}
          </div>
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
