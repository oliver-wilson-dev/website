import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.css';
import Landing from '../Landing';
import CookieDisclaimer from '../../containers/CookieDisclaimer';
import Sections from '../../containers/Sections';
import Header from '../Header';
import Footer from '../../containers/Footer';
import { DARK_THEME } from '../../state/actions/constants';

const App = ({ theme }) => (
  <div
    className={cn(styles.app, {
      [styles.app__dark]: theme === DARK_THEME
    })}
    data-theme={theme}
  >
    <Header />
    <div className={cn(styles.appContent, {
      [styles.appContent__dark]: theme === DARK_THEME
    })}
    >
      <Landing />
      <CookieDisclaimer />
      <Sections />
    </div>
    <Footer />
  </div>
);

App.propTypes = {
  theme: PropTypes.string.isRequired
};

export default App;
