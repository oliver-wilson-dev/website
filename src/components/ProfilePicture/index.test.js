import React from 'react';
import { shallow } from 'enzyme';
import ProfilePicture from '.';
import useFadeInClasses from '../../hooks/useFadeInClasses';

jest.mock('../../hooks/useFadeInClasses');


describe('ProfilePicture', () => {
  beforeEach(() => {
    useFadeInClasses.mockReturnValueOnce({ fadeInClasses: 'test-fade-in-classes' });
  });


  const defaultProps = {};

  const render = ({ overrideProps } = { overrideProps: {} }) => shallow(
    <ProfilePicture
      {...defaultProps}
      {...overrideProps}
    />
  );

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
