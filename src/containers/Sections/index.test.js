import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedSections from '.';
import Sections from '../../components/Sections';
import fetchContent from '../../state/actions/fetchContent';
import { getSections, getSectionsContentFetched } from '../../state/selectors';

jest.mock('../../state/actions/fetchContent');
jest.mock('../../state/selectors');
jest.mock('../../components/Sections', () => () => null);

const { testRender, testAction, testProp } = testReduxComponent(
  ConnectedSections,
  Sections
);

describe('connected DeleteButton', () => {
  testRender();
  testAction('fetchContent', fetchContent);
  testProp('sections', getSections);
  testProp('sectionsContentFetched', getSectionsContentFetched);
});
