import Welcome from './index';

describe('Welcome Section', () => {
  it('should render correctly', () => {
    expect(Welcome).toMatchSnapshot();
  });
});
