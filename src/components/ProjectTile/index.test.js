import React from 'react';
import { shallow } from 'enzyme';
import ProjectTile from '.';

const render = (overrideProps = {}) => shallow(
  <ProjectTile
    name="test-project-name"
    description="test-description"
    technologies={['react', 'redux', 'node']}
    {...overrideProps}
  />
);

describe('ProjectTile', () => {
  describe('when provided with a name, technologies list and description', () => {
    it('should render correctly', () => {
      expect(render()).toMatchSnapshot();
    });

    describe('and a codeHref', () => {
      const overrideProps = {
        codeHref: 'https://test-href',
      };

      it('should render correctly', () => {
        expect(render(overrideProps)).toMatchSnapshot();
      });

      describe('and a demoHref', () => {
        const overrideProps = {
          codeHref: 'https://test-href',
          demoHref: 'https://test-href',
        };

        it('should render correctly', () => {
          expect(render(overrideProps)).toMatchSnapshot();
        });
      });
    });

    describe('and a demoHref', () => {
      const overrideProps = {
        demoHref: 'https://test-href',
      };

      it('should render correctly', () => {
        expect(render(overrideProps)).toMatchSnapshot();
      });
    });
  });
});
