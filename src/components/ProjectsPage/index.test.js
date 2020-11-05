import React from 'react';
import { shallow } from 'enzyme';
import ProjectsPage from '.';

jest.mock('../ProjectTile', () => {
  const ProjectTile = ({ name }) => <article>{name}</article>;

  return ProjectTile;
});

jest.mock('../../containers/Page', () => {
  const Page = ({ children }) => <div>{children}</div>;

  return Page;
});

const render = (overrideProps = {}) => shallow(
  <ProjectsPage
    name="test-project-name"
    description="test-description"
    technologies={['react', 'redux', 'node']}
    {...overrideProps}
  />
);

describe('ProjectsPage', () => {
  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
