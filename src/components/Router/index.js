import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, useLocation } from 'react-router-dom';


const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Fragment>{children}</Fragment>;
};

const Router = ({ children }) => (
  <BrowserRouter basename="/">
    <ScrollToTop>
      {children}
    </ScrollToTop>
  </BrowserRouter>
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
