import React from 'react';
import { shallow, mount } from 'enzyme';
import Sections from '.';

jest.mock('../PlacesWorked', () => {
  const PlacesWorked = () => null;

  return PlacesWorked;
});

jest.mock('../DownloadButton', () => {
  const DownloadButton = () => null;

  return DownloadButton;
});

jest.mock('../ProfilePicture', () => {
  const ProfilePicture = () => null;

  return ProfilePicture;
});

jest.mock('../Greeting', () => {
  const Greeting = () => null;

  return Greeting;
});

jest.mock('../Education', () => {
  const Education = () => null;

  return Education;
});

jest.mock('../Experience', () => {
  const Experience = () => null;

  return Experience;
});

jest.mock('../Contact', () => {
  const Contact = () => null;

  return Contact;
});

const defaultProps = {
  fetchContent: jest.fn(),
  sections: {
    greeting: { [Symbol('test-key')]: Symbol('test-value') },
    education: { [Symbol('test-key')]: Symbol('test-value') },
    experience: { [Symbol('test-key')]: Symbol('test-value') },
    contact: { [Symbol('test-key')]: Symbol('test-value') },
  },
  sectionsContentFetched: true
};

const render = overrideProps => shallow(<Sections {...defaultProps} {...overrideProps} />);
const renderMount = overrideProps => mount(<Sections {...defaultProps} {...overrideProps} />);

describe('<Sections/>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });


  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it('should call fetchContent() once', () => {
    renderMount();
    expect(defaultProps.fetchContent).toHaveBeenCalledWith();
  });

  describe('when the sections content is not fetched', () => {
    it('should render correctly', () => {
      expect(render({ sectionsContentFetched: false })).toMatchSnapshot();
    });
  });
});
