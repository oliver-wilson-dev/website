import React from 'react';
import PropTypes from 'prop-types';
import { StaticRouter as ReactDomStaticRouter } from 'react-router-dom';

const StaticRouter = ({ children, location }) => (
  <ReactDomStaticRouter context={{}} location={location}>
    {children}
  </ReactDomStaticRouter>
);

StaticRouter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  location: PropTypes.string
};

export default StaticRouter;
