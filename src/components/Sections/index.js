import React from 'react';
import Section from '../Section';
import sectionContent from '../../content';

const Sections = () => (
  <div>
    {
        sectionContent.map(
          ({ title, content }) => <Section key={title} title={title} content={content} />,
        )
    }
  </div>
);

export default Sections;
