import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedHeader from '.';
import Header from '../../components/Header';
import toggleShowSideNav from '../../state/actions/toggleShowSideNav';

jest.mock('../../state/actions/toggleShowSideNav');
jest.mock('../../components/Header', () => () => null);
jest.mock('../../state/selectors');

const { testRender, testAction } = testReduxComponent(
  ConnectedHeader,
  Header
);

describe('connected DeleteButton', () => {
  testRender();
  testAction('toggleShowSideNav', toggleShowSideNav);
});
