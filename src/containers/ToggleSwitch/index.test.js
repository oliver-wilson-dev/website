import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedToggleSwitch from '.';
import ToggleSwitch from '../../components/ToggleSwitch';
import toggleTheme from '../../state/actions/toggleTheme';

jest.mock('../../state/actions/toggleTheme');
jest.mock('../../components/ToggleSwitch', () => () => null);

const { testRender, testAction } = testReduxComponent(
  ConnectedToggleSwitch,
  ToggleSwitch
);

describe('connected DeleteButton', () => {
  testRender();
  testAction('toggleTheme', toggleTheme);
});
