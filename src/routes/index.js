/* eslint-disable import/no-cycle */
import loadable from '@loadable/component';

const routes = {
  home: {
    path: '/',
    component: loadable(() => import(/* webpackChunkName: "HomePage" */ '../components/HomePage'))
  },
  about: {
    path: '/about',
    component: loadable(() => import(/* webpackChunkName: "AboutPage" */ '../components/AboutPage'))
  },
  projects: {
    path: '/projects',
    component: loadable(() => import(/* webpackChunkName: "ProjectsPage" */ '../components/ProjectsPage'))
  },
  notFound: {
    path: undefined,
    component: loadable(() => import(/* webpackChunkName: "NotFoundPage" */ '../components/NotFoundPage'))
  }
};

export default routes;
