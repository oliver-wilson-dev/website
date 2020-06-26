import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './index.css';

const SubPage = ({ additionalStyles, children }) => (
  <div className={cn(styles.subPage, additionalStyles)}>{children}</div>
);

SubPage.propTypes = {
  additionalStyles: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default SubPage;
