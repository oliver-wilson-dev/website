import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import Workplace from '../Workplace';

const Experience = ({ title, workplaces, emoji }) => (
  <Section title={title}>
    {workplaces.map(({ companyName, ...rest }) => (
      <Workplace
        key={companyName}
        {...{ ...rest, companyName }}
        emoji={emoji}
      />
    ))}
  </Section>
);

Experience.propTypes = {
  emoji: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  workplaces: PropTypes.array.isRequired
};

export default Experience;
