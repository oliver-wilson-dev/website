import { allViewports } from '../utils/allViewports';
import { cookieBannerTests } from '../shared/cookieBanner';

const { ABOUT_PAGE } = Cypress.env('URLS');

describe('The about page', () => {
  allViewports(() => {
    cookieBannerTests(ABOUT_PAGE);
  });
});
