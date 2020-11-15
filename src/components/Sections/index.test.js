import React from 'react';
import { shallow, mount } from 'enzyme';

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

const render = (overrideProps) => {
  const Sections = require('./index').default;
  return shallow(<Sections {...defaultProps} {...overrideProps} />);
};
const renderMount = (overrideProps) => {
  const Sections = require('./index').default;
  mount(<Sections {...defaultProps} {...overrideProps} />);
};

describe('<Sections/>', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    jest.doMock('../../utils/clientOrServer', () => ({
      IS_CLIENT: true
    }));
  });


  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it('should not all fetchContent()', () => {
    renderMount();
    expect(defaultProps.fetchContent).not.toHaveBeenCalled();
  });

  describe('when the sections content is not fetched', () => {
    it('should call fetchContent()', () => {
      renderMount({ sectionsContentFetched: false });
      expect(defaultProps.fetchContent).toHaveBeenCalledWith();
    });

    it('should render correctly', () => {
      expect(render({ sectionsContentFetched: false })).toMatchSnapshot();
    });
  });
});
