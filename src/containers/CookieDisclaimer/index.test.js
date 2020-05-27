import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedCookieDisclaimer from '.';
import CookieDisclaimer from '../../components/CookieDisclaimer';
import { getShowLearnMore } from '../../state/selectors';

jest.mock('../../state/selectors');
jest.mock('../../components/CookieDisclaimer', () => () => null);

const { testRender, testProp } = testReduxComponent(
  ConnectedCookieDisclaimer,
  CookieDisclaimer
);

describe('connected DeleteButton', () => {
  testRender();
  testProp('showLearnMore', getShowLearnMore);
});
