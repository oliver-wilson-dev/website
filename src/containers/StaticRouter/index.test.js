import testReduxComponent from '../../../test/helpers/testConnectedComponent';
import ConnectedStaticRouter from '.';
import StaticRouter from '../../components/StaticRouter';

import { getLocation } from '../../state/selectors';

jest.mock('../../components/StaticRouter', () => () => null);
jest.mock('../../state/selectors');

const { testRender, testProp } = testReduxComponent(
  ConnectedStaticRouter,
  StaticRouter
);

describe('connected StaticRouter', () => {
  testRender();
  testProp('location', getLocation);
});
