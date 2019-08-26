import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedApp from '.';
import App from '../../components/App';
import { getTheme } from '../../state/selectors';

jest.mock('../../state/selectors');
jest.mock('../../state/actions/toggleTheme');
jest.mock('../../components/App', () => () => null);

const { testRender, testProp } = testReduxComponent(
  ConnectedApp,
  App
);

describe('connected App', () => {
  testRender();
  testProp('theme', getTheme);
});
