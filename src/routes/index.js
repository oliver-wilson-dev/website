/* eslint-disable import/no-cycle */
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import ProjectsPage from '../components/ProjectsPage';
import NotFoundPage from '../components/NotFoundPage';

const routes = {
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
};

export default routes;
