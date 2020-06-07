import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedFooter from '.';
import Footer from '../../components/Footer';
import learnMoreClicked from '../../state/actions/learnMoreClicked';
import { getSectionsContentFetched } from '../../state/selectors';

jest.mock('../../state/selectors');
jest.mock('../../state/actions/learnMoreClicked');
jest.mock('../../components/Footer', () => () => null);

const { testRender, testAction, testProp } = testReduxComponent(
  ConnectedFooter,
  Footer
);

describe('connected DeleteButton', () => {
  testRender();
  testAction('learnMoreClicked', learnMoreClicked);
  testProp('sectionsContentFetched', getSectionsContentFetched);
});
