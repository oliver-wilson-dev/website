import React from 'react';
import { shallow } from 'enzyme';
import ProjectImages from './ProjectImages';

const projectImage = {
  linkToProject: 'test-link-to-project',
  image: {
    alt: 'test-alt',
    src: 'test-src'
  }
};

const defaultProps = {
  projectImages: [projectImage]
};

const render = ({ overrideProps = {} } = { overrideProps: {} }) => shallow(
  <ProjectImages
    {...defaultProps}
    {...overrideProps}
  />
);

describe('ProjectImages', () => {
  describe('when there is one project image', () => {
    it('should render correctly', () => {
      expect(render()).toMatchSnapshot();
    });
  });

  describe('when there are multiple project images', () => {
    it('should render correctly', () => {
      expect(render({
        overrideProps: {
          projectImages: [projectImage, projectImage]
        }
      })).toMatchSnapshot();
    });
  });
});
