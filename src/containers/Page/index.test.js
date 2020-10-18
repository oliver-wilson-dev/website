import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedPage from '.';
import Page from '../../components/Page';
import { getTheme } from '../../state/selectors';

jest.mock('../../state/selectors');
jest.mock('../../state/actions/toggleTheme');
jest.mock('../../components/Page', () => () => null);

const { testRender, testProp } = testReduxComponent(
  ConnectedPage,
  Page
);

describe('connected Page', () => {
  testRender();
  testProp('theme', getTheme);
});
