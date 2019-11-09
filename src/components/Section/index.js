import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.css';
import sharedStyles from '../App/index.css';

class Section extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      expandable: false,
      visible: false
    };

    this.getRef = this.getRef.bind(this);
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

  getRef(elm) {
    this.displayBoxRef = elm;
  }

  onButtonClick = () => {
    this.setState(previousState => ({
      ...previousState,
      expanded: !previousState.expanded
    }));
  }

  render() {
    const {
      onButtonClick,
      getRef,
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
          ref={getRef}
          className={(cn(styles.landingBlurb, styles.displayBox,
            {
              [styles.displayBoxExpanded]: expanded,
              [styles.blurBottom]: expandable && !expanded
            }))
          }
        >
          {expandable && (
          <button className={styles.collapseExpand} type="button" onClick={onButtonClick}>
            <span>{expanded ? '−' : '+'}</span>
          </button>
          )}
          {children}
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
