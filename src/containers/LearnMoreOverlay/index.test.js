import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedLearnMoreOverlay from '.';
import LearnMoreOverlay from '../../components/LearnMoreOverlay';
import learnMoreClicked from '../../state/actions/learnMoreClicked';

jest.mock('../../state/actions/learnMoreClicked');
jest.mock('../../components/LearnMoreOverlay', () => () => null);

const { testRender, testAction } = testReduxComponent(
  ConnectedLearnMoreOverlay,
  LearnMoreOverlay
);

describe('connected DeleteButton', () => {
  testRender();
  testAction('learnMoreClicked', learnMoreClicked);
});
