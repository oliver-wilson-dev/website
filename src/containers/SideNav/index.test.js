import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedSideNav from '.';
import SideNav from '../../components/SideNav';
import toggleShowSideNav from '../../state/actions/toggleShowSideNav';
import { getShowSideNav } from '../../state/selectors';

jest.mock('../../state/actions/toggleShowSideNav');
jest.mock('../../components/SideNav', () => () => null);
jest.mock('../../state/selectors');

const { testRender, testAction, testProp } = testReduxComponent(
  ConnectedSideNav,
  SideNav
);

describe('connected DeleteButton', () => {
  testRender();
  testProp('showSideNav', getShowSideNav);
  testAction('toggleShowSideNav', toggleShowSideNav);
});
