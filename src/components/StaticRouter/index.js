import React from 'react';
import PropTypes from 'prop-types';
import { StaticRouter as ReactDomStaticRouter } from 'react-router-dom';

const StaticRouter = ({ children, location, context }) => (
  <ReactDomStaticRouter context={context} location={location}>
    {children}
  </ReactDomStaticRouter>
);

StaticRouter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  location: PropTypes.string,
  context: PropTypes.shape(),
};

export default StaticRouter;
