import React from 'react';
import { Link } from 'react-router-dom';
import sharedStyles from '../../styles/shared.css';
import SearchIcon from './search.svg';
import Page from '../../containers/Page';

import styles from './index.css';

const NotFoundPage = () => (
  <Page additionalStyles={styles.notFound}>
    <h1 className={sharedStyles.pageHeader}>Page not found</h1>
    <SearchIcon className={styles.searchIcon} />
    <Link to="/" className={styles.homeLink}>Return to Home Page</Link>
  </Page>
);

export default NotFoundPage;
