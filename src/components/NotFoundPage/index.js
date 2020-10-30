/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import sharedStyles from '../../styles/shared.css';
import SearchIcon from './search.svg';
import styles from './index.css';

import Page from '../../containers/Page';

const NotFound = () => (
  <Page additionalStyles={styles.notFound}>
    <h1 className={sharedStyles.pageHeader}>Page not found</h1>
    <SearchIcon className={styles.searchIcon} />
    <Link to="/" className={styles.homeLink}>Return to Home Page</Link>
  </Page>
);

export default NotFound;
