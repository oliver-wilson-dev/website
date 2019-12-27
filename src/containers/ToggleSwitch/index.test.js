import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedToggleSwitch from '.';
import ToggleSwitch from '../../components/ToggleSwitch';
import toggleTheme from '../../state/actions/toggleTheme';
import { getTheme } from '../../state/selectors';

jest.mock('../../state/actions/toggleTheme');
jest.mock('../../components/ToggleSwitch', () => () => null);
jest.mock('../../state/selectors');

const { testRender, testAction, testProp } = testReduxComponent(
  ConnectedToggleSwitch,
  ToggleSwitch
);

describe('connected DeleteButton', () => {
  testRender();
  testAction('toggleTheme', toggleTheme);
  testProp('theme', getTheme);
});
