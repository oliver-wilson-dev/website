import Education from './index';

describe('Education Section', () => {
  it('should render correctly', () => {
    expect(Education).toMatchSnapshot();
  });
});
