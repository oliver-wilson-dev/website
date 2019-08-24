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
      expandable: false
    };

    this.getRef = this.getRef.bind(this);
  }


  componentDidMount() {
    this.setState(
      previousState => ({
        ...previousState,
        expandable: this.displayBoxRef.offsetHeight >= 250
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
      state: { expanded, expandable },
    } = this;
    return (
      <div className={cn(sharedStyles.flexColumn, sharedStyles.flexCenter)}>
        <h2 className={sharedStyles.sectionTitle}>{title}</h2>
        <div
          ref={getRef}
          className={(cn(styles.landingBlurb, styles.displayBox,
            { [styles.displayBoxExpanded]: expanded }))}
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
