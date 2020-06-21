import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { HashRouter, useLocation } from 'react-router-dom';


const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Fragment>{children}</Fragment>;
};

const Router = ({ children }) => (
  <HashRouter basename="/">
    <ScrollToTop>
      {children}
    </ScrollToTop>
  </HashRouter>
);

const sharedPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

ScrollToTop.propTypes = sharedPropTypes;
Router.propTypes = sharedPropTypes;

export default Router;
