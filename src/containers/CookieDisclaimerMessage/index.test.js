import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedCookieDisclaimerMessage from '.';
import CookieDisclaimerMessage from '../../components/CookieDisclaimerMessage';
import learnMoreClicked from '../../state/actions/learnMoreClicked';

jest.mock('../../state/actions/learnMoreClicked');
jest.mock('../../components/CookieDisclaimerMessage', () => () => null);

const { testRender, testAction } = testReduxComponent(
  ConnectedCookieDisclaimerMessage,
  CookieDisclaimerMessage
);

describe('connected DeleteButton', () => {
  testRender();
  testAction('learnMoreClicked', learnMoreClicked);
});
