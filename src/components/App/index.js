import React from 'react';
import styles from './index.css';
import Footer from '../Footer';
import Landing from '../Landing';
import Sections from '../Sections';
import SocialMedia from '../SocialMedia';
import DownloadButton from '../DownloadButton';

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
