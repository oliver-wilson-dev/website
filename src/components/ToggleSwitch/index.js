import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.css';

const inputId = 'input-id';

const ToggleSwitch = ({ toggleTheme, checkBoxChecked }) => (
  <label className={styles.switch} htmlFor={inputId}>
    <input type="checkbox" id={inputId} onClick={toggleTheme} defaultChecked={checkBoxChecked} />
    <span className={classnames(styles.slider, styles.round)} />
  </label>
);

ToggleSwitch.propTypes = {
  checkBoxChecked: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired
};

export default ToggleSwitch;
