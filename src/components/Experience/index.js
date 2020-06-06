import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import Workplace from '../Workplace';

const Experience = ({ title, workplaces }) => (
  <Section title={title}>
    {workplaces.map(({ companyName, ...rest }) => (
      <Workplace
        key={companyName}
        {...{ ...rest, companyName }}
      />
    ))}
  </Section>
);

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  workplaces: PropTypes.array.isRequired
};

export default Experience;
