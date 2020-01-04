import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.css';
import sharedStyles from '../App/index.css';

const Section = ({ title, children }) => {
  const displayBoxRef = useRef(null);
  const childrenRef = useRef(null);

  const [expanded, setExpanded] = useState(false);
  const [expandable, setExpandable] = useState(false);
  const [visible, setVisible] = useState(false);

  const canBeFocusedProgrammatically = -1;
  useEffect(() => {
    setExpandable(displayBoxRef.current.offsetHeight >= 250);
    setVisible(true);
  }, []);

  useEffect(() => {
    if (expanded) childrenRef.current.focus();
  }, [expanded]);

  const onButtonClick = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

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
      <div
        ref={displayBoxRef}
        className={(cn(
          styles.landingBlurb,
          styles.displayBox,
          {
            [styles.displayBoxExpanded]: expanded,
            [styles.blurBottom]: expandable && !expanded
          }
        ))
          }
      >
        {expandable && (
          <button
            className={styles.collapseExpand}
            type="button"
            onClick={onButtonClick}
            aria-expanded={expanded}
            aria-label={`click to ${expanded
              ? 'minimise this section'
              : 'expand this section to reveal more content'}`
            }
          >
            <span>{expanded ? '−' : '+'}</span>
          </button>
        )}
        <div
          ref={childrenRef}
          tabIndex={canBeFocusedProgrammatically}
          aria-hidden={expandable && !expanded}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Section;
