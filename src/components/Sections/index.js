import React from 'react';
import PropTypes from 'prop-types';
import Greeting from '../Greeting';
import Education from '../Education';
import Experience from '../Experience';
import Contact from '../Contact';


class Sections extends React.Component {
  componentDidMount() {
    const { props: { fetchContent } } = this;
    fetchContent();
  }

  render() {
    const { props: { sections, sectionsContentFetched } } = this;

    return sectionsContentFetched ? (
      <React.Fragment>
        <Greeting {...sections.greeting} />
        <Education {...sections.education} />
        <Experience {...sections.experience} />
        <Contact {...sections.contact} />
      </React.Fragment>
    ) : null;
  }
}

Sections.propTypes = {
  fetchContent: PropTypes.func.isRequired,
  sections: PropTypes.object.isRequired,
  sectionsContentFetched: PropTypes.bool.isRequired
};

export default Sections;
