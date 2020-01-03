import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.css';

const LoadingSpinner = ({ loading }) => {
  const [transitionDone, setTransitionDone] = useState(false);

  const onTransitionEnd = () => setTransitionDone(true);

  return transitionDone
    ? null : (
      <div className={styles.wrapper}>
        <div
          className={classnames(styles.loadingSpinner, {
            [styles.hide]: !loading
          })}
          onTransitionEnd={onTransitionEnd}
        />
      </div>
    );
};

LoadingSpinner.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default LoadingSpinner;
