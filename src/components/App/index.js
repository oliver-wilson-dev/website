import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import Landing from '../Landing';
import CookieDisclaimer from '../CookieDisclaimer';
import Sections from '../../containers/Sections';
import ToggleSwitch from '../../containers/ToggleSwitch';

const App = ({ theme }) => (
  <div className={styles.app} data-theme={theme}>
    <div className={styles.appContent}>
      <ToggleSwitch />
      <Landing />
      <CookieDisclaimer />
      <Sections />
    </div>
  </div>
);

App.propTypes = {
  theme: PropTypes.string.isRequired
};

export default App;
