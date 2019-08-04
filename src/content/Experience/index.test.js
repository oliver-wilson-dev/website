import Experience from './index';

describe('Experience Section', () => {
  it('should render correctly', () => {
    expect(Experience).toMatchSnapshot();
  });
});
