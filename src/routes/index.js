/* eslint-disable import/no-cycle */
import loadable from '@loadable/component';

const routes = {
  home: {
    path: '/',
    component: loadable(() => import(/* webpackChunkName: "home-page" */ '../components/HomePage'))
  },
  about: {
    path: '/about',
    component: loadable(() => import(/* webpackChunkName: "about-page" */ '../components/AboutPage'))
  },
  projects: {
    path: '/projects',
    component: loadable(() => import(/* webpackChunkName: "projects-page" */ '../components/ProjectsPage'))
  },
  notFound: {
    path: undefined,
    component: loadable(() => import(/* webpackChunkName: "notFound-page" */ '../components/NotFoundPage'))
  }
};

export default routes;
