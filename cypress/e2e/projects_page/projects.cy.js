import { allViewports } from '../utils/allViewports';
import { cookieBannerTests } from '../shared/cookieBanner';

const { PROJECTS_PAGE } = Cypress.env('URLS');

describe('The projects page', () => {
  allViewports(() => {
    cookieBannerTests(PROJECTS_PAGE);
  });
});
