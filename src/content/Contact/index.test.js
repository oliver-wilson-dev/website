import Contact from './index';

describe('Contact Section', () => {
  it('should render correctly', () => {
    expect(Contact).toMatchSnapshot();
  });
});
