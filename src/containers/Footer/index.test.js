import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedFooter from '.';
import Footer from '../../components/Footer';
import learnMoreClicked from '../../state/actions/learnMoreClicked';


jest.mock('../../state/selectors');
jest.mock('../../state/actions/learnMoreClicked');
jest.mock('../../components/Footer', () => () => null);

const { testRender, testAction } = testReduxComponent(
  ConnectedFooter,
  Footer
);

describe('connected DeleteButton', () => {
  testRender();
  testAction('learnMoreClicked', learnMoreClicked);
});
