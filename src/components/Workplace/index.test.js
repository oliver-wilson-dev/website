import React from 'react';
import { shallow } from 'enzyme';
import Workplace from '.';

jest.mock('./ProjectImages', () => {
  const ProjectImages = () => null;

  return ProjectImages;
});

const defaultProps = {
  companyName: 'test-company-name',
  content: [],
  emoji: 'test-emoji',
  employmentPeriod: 'test-employment-period',
  jobTitle: 'test-job-title',
  projectImages: []
};


const render = ({ overrideProps = {} } = { overrideProps: {} }) => shallow(
  <Workplace
    {...defaultProps}
    {...overrideProps}
  />
);

describe('Workplace', () => {
  describe('when there is no content', () => {
    describe('when there are no projectImages', () => {
      it('should render correctly', () => {
        expect(render()).toMatchSnapshot();
      });
    });

    describe('when there are projectImages', () => {
      it('should render correctly', () => {
        expect(render({
          overrideProps: {
            projectImages: ['test-project-image']
          }
        })).toMatchSnapshot();
      });
    });
  });

  describe('when there is content', () => {
    describe('when there are no projectImages', () => {
      it('should render correctly', () => {
        expect(render({
          overrideProps: {
            content: ['test-content']
          }
        })).toMatchSnapshot();
      });
    });

    describe('when there are projectImages', () => {
      it('should render correctly', () => {
        expect(render({
          overrideProps: {
            projectImages: ['test-project-image'],
            content: ['test-content']
          }
        })).toMatchSnapshot();
      });
    });
  });
});
