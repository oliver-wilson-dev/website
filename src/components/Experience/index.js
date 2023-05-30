import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import Workplace from '../Workplace';
import Slider from '../Slider';
import SectionTile from '../SectionTile';
import styles from './index.css';

const Experience = ({ title, workplaces }) => (
  <Section title={title} additionalStyles={{ section: styles.tilesFlowOffScreen }}>
    <Slider>
      {workplaces.map(({ companyName, ...rest }) => (
        <SectionTile key={companyName}>
          <Workplace
            {...{ ...rest, companyName }}
          />
        </SectionTile>
      ))}
    </Slider>
  </Section>
);

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  workplaces: PropTypes.array.isRequired
};

export default Experience;
