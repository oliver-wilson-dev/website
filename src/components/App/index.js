import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import DownloadButton from '../DownloadButton';
import Footer from '../Footer';
import Landing from '../Landing';
import Sections from '../../containers/Sections';
import SocialMedia from '../SocialMedia';
import ToggleSwitch from '../../containers/ToggleSwitch';

const App = ({ theme }) => (
  <div className={styles.app} data-theme={theme}>
    <div className={styles.appContent}>
      <ToggleSwitch />
      <Landing />
      <Sections />
      <DownloadButton />
      <SocialMedia />
      <Footer />
    </div>
  </div>
);

App.propTypes = {
  theme: PropTypes.string.isRequired
};

export default App;
