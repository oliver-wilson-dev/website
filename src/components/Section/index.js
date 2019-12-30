import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.css';
import sharedStyles from '../App/index.css';

class Section extends React.Component {
  constructor(props) {
    super(props);

    this.displayBoxRef = null;
    this.childrenRef = React.createRef();

    this.state = {
      expanded: false,
      expandable: false,
      visible: false
    };

    this.setDisplayBoxRef = this.setDisplayBoxRef.bind(this);

    this.canBeFocusedProgrammatically = -1;
  }


  componentDidMount() {
    this.setState(
      previousState => ({
        ...previousState,
        expandable: this.displayBoxRef.offsetHeight >= 250,
        visible: true
      })
    );
  }

  componentDidUpdate() {
    const { state: { expanded } } = this;

    if (expanded) { this.childrenRef.current.focus(); }
  }

  setDisplayBoxRef(elm) {
    this.displayBoxRef = elm;
  }

  onButtonClick = (e) => {
    e.preventDefault();
    this.setState(previousState => ({
      ...previousState,
      expanded: !previousState.expanded
    }));
  }

  render() {
    const {
      canBeFocusedProgrammatically,
      onButtonClick,
      setDisplayBoxRef,
      props: { title, children },
      state: { expanded, expandable, visible },
    } = this;

    return (
      <div className={cn(sharedStyles.flexColumn, sharedStyles.flexCenter, styles.section, {
        [styles.show]: visible
      })}
      >
        <h2 className={sharedStyles.sectionTitle}>{title}</h2>
        <div
          ref={setDisplayBoxRef}
          className={(cn(styles.landingBlurb, styles.displayBox,
            {
              [styles.displayBoxExpanded]: expanded,
              [styles.blurBottom]: expandable && !expanded
            }))
          }
        >
          {expandable && (
          <button
            className={styles.collapseExpand}
            type="button"
            onClick={onButtonClick}
            aria-expanded={expanded}
            aria-label={expanded ? 'click to minimise this section' : 'click to expand this section to reveal more content'}
          >
            <span>{expanded ? '−' : '+'}</span>
          </button>
          )}
          <div
            ref={this.childrenRef}
            tabIndex={canBeFocusedProgrammatically}
            aria-hidden={expandable && !expanded}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Section;
