import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.css';

const SubPage = ({ children }) => (
  <div className={styles.subPage}>{children}</div>
);

SubPage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default SubPage;
