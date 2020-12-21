/* eslint-disable import/no-cycle */

import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import sharedStyles from '../../styles/shared.css';
import SearchIcon from './search.svg';
import Page from '../../containers/Page';
import routes from '../../routes';

import styles from './index.css';

const NotFoundPage = ({ staticContext }) => {
  if (staticContext) staticContext.statusCode = 404;

  return (
    <Page additionalStyles={styles.notFound}>
      <h1 className={sharedStyles.pageHeader}>Page not found</h1>
      <SearchIcon className={styles.searchIcon} />
      <Link to={routes.home.path} className={styles.homeLink}>Return to Home Page</Link>
    </Page>
  );
};

NotFoundPage.propTypes = {
  staticContext: PropTypes.shape()
};

export default NotFoundPage;
