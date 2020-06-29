/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import sharedStyles from '../../styles/shared.css';
import SearchIcon from './search.svg';
import styles from './index.css';

import SubPage from '../SubPage';

const NotFound = () => (
  <SubPage additionalStyles={styles.notFound}>
    <h1 className={sharedStyles.pageHeader}>Page not found</h1>
    <SearchIcon className={styles.searchIcon} />
    <Link to="/" className={styles.homeLink}>Return to Home Page</Link>
  </SubPage>
);

export default NotFound;
