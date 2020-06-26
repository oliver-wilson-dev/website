/* eslint-disable max-len */
import React from 'react';
import sharedStyles from '../../styles/shared.css';
import SearchIcon from './search.svg';
import styles from './index.css';

import SubPage from '../SubPage';

const NotFound = () => (
  <SubPage additionalStyles={styles.notFound}>
    <h1 className={sharedStyles.pageHeader}>Page not found</h1>
    <SearchIcon className={styles.searchIcon} />
    <p>Well, this is embarrassing. Looks like the url you&apos;re on doesn&apos;t exist.</p>
  </SubPage>
);

export default NotFound;
