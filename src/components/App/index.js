import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Route, Switch } from 'react-router-dom';
import styles from './index.css';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import CookieDisclaimer from '../../containers/CookieDisclaimer';
import Router from '../Router';
import useBackgroundClasses from '../../hooks/useBackgroundClasses';
import routes from '../../routes';

const {
  home,
  about,
  projects,
  notFound
} = routes;

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
            <Route exact path={home.path} component={home.component} />
            <Route path={about.path} component={about.component} />
            <Route path={projects.path} component={projects.component} />
            <Route component={notFound.component} />
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
