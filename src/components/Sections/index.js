import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Greeting from '../Greeting';
import Education from '../Education';
import Experience from '../Experience';
import LoadingSpinner from '../LoadingSpinner';
import Contact from '../Contact';

import ProfilePicture from '../ProfilePicture';
import DownloadButton from '../DownloadButton';
import Footer from '../Footer';
import SocialMedia from '../SocialMedia';

const Sections = ({ fetchContent, sections, sectionsContentFetched }) => {
  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <React.Fragment>
      <LoadingSpinner loading={!sectionsContentFetched} />
      {sectionsContentFetched && (
        <React.Fragment>
          <ProfilePicture />
          <Greeting {...sections.greeting} />
          <Education {...sections.education} />
          <Experience {...sections.experience} />
          <Contact {...sections.contact} />
          <DownloadButton />
          <SocialMedia />
          <Footer />
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
