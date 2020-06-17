import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { HashRouter as Router, Route } from 'react-router-dom';
import styles from './index.css';
import Home from '../Home';
import About from '../About';
import Header from '../Header';
import Footer from '../../containers/Footer';
import { DARK_THEME } from '../../state/actions/constants';
import CookieDisclaimer from '../../containers/CookieDisclaimer';

const App = ({ theme }) => (
  <div
    className={cn(styles.app, {
      [styles.app__dark]: theme === DARK_THEME
    })}
    data-theme={theme}
  >
    <Router basename="/">
      <Header />
      <main className={cn(styles.appContent, {
        [styles.appContent__dark]: theme === DARK_THEME
      })}
      >
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </main>
      <Footer />
      <CookieDisclaimer />
    </Router>
  </div>
);

App.propTypes = {
  theme: PropTypes.string.isRequired
};

export default App;
