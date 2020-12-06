import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import window from 'global';
import { BrowserRouter, StaticRouter, useLocation } from 'react-router-dom';
import { IS_SERVER } from '../../utils';

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Fragment>{children}</Fragment>;
};

const Router = ({ children }) => {
  const Router = IS_SERVER ? StaticRouter : BrowserRouter;

  return (
    <Router basename="/">
      <ScrollToTop>
        {children}
      </ScrollToTop>
    </Router>
  );
};

const sharedPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

ScrollToTop.propTypes = sharedPropTypes;
Router.propTypes = sharedPropTypes;

export default Router;
