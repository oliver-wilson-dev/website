import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.css';


class LoadingSpinner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transitionDone: false
    };
  }

  onTransitionEnd() {
    this.setState({ transitionDone: true });
  }

  render() {
    const { props: { loading }, state: { transitionDone } } = this;

    return transitionDone
      ? null : (
        <div className={styles.wrapper}>
          <div
            className={classnames(styles.loadingSpinner, {
              [styles.hide]: !loading
            })}
            onTransitionEnd={() => this.onTransitionEnd()}
          />
        </div>
      );
  }
}

LoadingSpinner.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default LoadingSpinner;
