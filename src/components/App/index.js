import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Route, Switch } from 'react-router-dom';
import styles from './index.css';
import HomePage from '../HomePage';
import AboutPage from '../AboutPage';
import ProjectsPage from '../ProjectsPage';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import CookieDisclaimer from '../../containers/CookieDisclaimer';
import Router from '../Router';
import NotFoundPage from '../NotFoundPage';
import useBackgroundClasses from '../../hooks/useBackgroundClasses';

const App = ({ theme }) => {
  const backgroundClasses = useBackgroundClasses({ theme });

  return (
    <div
      className={cn(styles.app, backgroundClasses)}
      data-theme={theme}
    >
      <Router>
        <Header />
        <main className={cn(styles.main, backgroundClasses)}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <Footer />
        <CookieDisclaimer />
      </Router>
    </div>
  );
};

App.propTypes = {
  theme: PropTypes.string.isRequired
};

export default App;
