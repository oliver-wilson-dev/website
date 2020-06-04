import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.css';
import Landing from '../Landing';
import CookieDisclaimer from '../../containers/CookieDisclaimer';
import Sections from '../../containers/Sections';
import ToggleSwitch from '../../containers/ToggleSwitch';
import { DARK_THEME } from '../../state/actions/constants';

const App = ({ theme }) => (
  <div
    className={cn(styles.app, {
      [styles.app__dark]: theme === DARK_THEME
    })}
    data-theme={theme}
  >
    <div className={cn(styles.appContent, {
      [styles.appContent__dark]: theme === DARK_THEME
    })}
    >
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
