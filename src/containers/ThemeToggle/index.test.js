import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedToggleSwitch from '.';
import ThemeToggle from '../../components/ThemeToggle';
import toggleTheme from '../../state/actions/toggleTheme';
import { getTheme } from '../../state/selectors';

jest.mock('../../state/actions/toggleTheme');
jest.mock('../../components/ThemeToggle', () => () => null);
jest.mock('../../state/selectors');

const { testRender, testAction, testProp } = testReduxComponent(
  ConnectedToggleSwitch,
  ThemeToggle
);

describe('connected ThemeToggle', () => {
  testRender();
  testAction('toggleTheme', toggleTheme);
  testProp('theme', getTheme);
});
