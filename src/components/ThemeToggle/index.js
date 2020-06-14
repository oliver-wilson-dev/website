import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.css';
import { LIGHT_THEME } from '../../state/actions/constants';

const inputId = 'input-id';

const ThemeToggle = ({ toggleTheme, theme }) => (
  <label className={styles.switch} htmlFor={inputId}>
    <input
      type="checkbox"
      id={inputId}
      onClick={toggleTheme}
      defaultChecked={theme !== LIGHT_THEME}
      aria-label={`The theme is currently the ${theme === LIGHT_THEME ? 'light' : 'dark'} theme. Use this to toggle the theme.`}
    />
    <span className={classnames(styles.slider, styles.round)} />
  </label>
);

ThemeToggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired
};

export default ThemeToggle;
