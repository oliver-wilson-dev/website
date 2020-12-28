/* eslint-disable import/order */
import loadable from '@loadable/component';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import ProjectsPage from '../components/ProjectsPage';
import NotFoundPage from '../components/NotFoundPage';

jest.mock('../components/HomePage', () => {
  const HomePage = () => null;

  return HomePage;
});

jest.mock('../components/AboutPage', () => {
  const AboutPage = () => null;

  return AboutPage;
});

jest.mock('../components/NotFoundPage', () => {
  const NotFoundPage = () => null;

  return NotFoundPage;
});

jest.mock('../components/ProjectsPage', () => {
  const ProjectsPage = () => null;

  return ProjectsPage;
});

jest.mock('@loadable/component');

describe('routes', () => {
  beforeEach(() => {
    loadable.mockReturnValueOnce(HomePage);
    loadable.mockReturnValueOnce(AboutPage);
    loadable.mockReturnValueOnce(ProjectsPage);
    loadable.mockReturnValueOnce(NotFoundPage);
  });


  it('should export the correct routes', () => {
    const routes = require('./index.js').default;

    expect(routes).toEqual({
      home: {
        path: '/',
        component: HomePage
      },
      about: {
        path: '/about',
        component: AboutPage
      },
      projects: {
        path: '/projects',
        component: ProjectsPage
      },
      notFound: {
        path: undefined,
        component: NotFoundPage
      }
    });
  });
});
