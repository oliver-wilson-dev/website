import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Greeting from '../Greeting';
import Education from '../Education';
import Experience from '../Experience';
import LoadingSpinner from '../LoadingSpinner';
import Contact from '../Contact';

import PlacesWorked from '../PlacesWorked';
import ProfilePicture from '../ProfilePicture';
import DownloadButton from '../DownloadButton';

import styles from './index.css';
import { IS_CLIENT } from '../../utils/clientOrServer';

const Sections = ({ fetchContent, sections, sectionsContentFetched }) => {
  useEffect(() => {
    console.log('client: ', sectionsContentFetched);
    if (!sectionsContentFetched) fetchContent();
  }, []);

  return (
    <React.Fragment>
      {IS_CLIENT && <LoadingSpinner loading={!sectionsContentFetched} />}
      {sectionsContentFetched && (
        <React.Fragment>
          <ProfilePicture />
          <PlacesWorked />
          <Greeting {...sections.greeting} />
          <Education {...sections.education} />
          <Experience {...sections.experience} />
          <Contact {...sections.contact} />
          <div className={styles.downloadButtonContainer}>
            <DownloadButton />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

Sections.propTypes = {
  fetchContent: PropTypes.func.isRequired,
  sections: PropTypes.object.isRequired,
  sectionsContentFetched: PropTypes.bool.isRequired
};

export default Sections;
