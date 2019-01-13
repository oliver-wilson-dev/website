import React from 'react';
import styles from './index.css';
import DownloadButton from '../DownloadButton';
import Footer from '../Footer';
import Landing from '../Landing';
import Sections from '../Sections';
import SocialMedia from '../SocialMedia';

const App = () => (
  <div className={styles.app}>
    <div className={styles.appContent}>
      <Landing />
      <Sections />
      <DownloadButton />
      <SocialMedia />
      <Footer />
    </div>
  </div>
);

export default App;
