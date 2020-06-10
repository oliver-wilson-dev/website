import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.css';


const SectionTile = ({ children, additionalStyles }) => {
  const displayBoxRef = useRef(null);
  const childrenRef = useRef(null);

  const [expanded, setExpanded] = useState(false);
  const [expandable, setExpandable] = useState(false);

  const canBeFocusedProgrammatically = -1;
  useEffect(() => {
    setExpandable(displayBoxRef.current.offsetHeight >= 250);
  }, []);

  useEffect(() => {
    if (expanded) childrenRef.current.focus();
  }, [expanded]);

  const onButtonClick = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };
  return (
    <div
      ref={displayBoxRef}
      className={(cn(
        styles.landingBlurb,
        styles.displayBox,
        {
          [styles.displayBoxExpanded]: expanded,
          [styles.blurBottom]: expandable && !expanded
        },
        additionalStyles
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
  );
};

SectionTile.propTypes = {
  children: PropTypes.node.isRequired,
  additionalStyles: PropTypes.shape()
};

export default SectionTile;
