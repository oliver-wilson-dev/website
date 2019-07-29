import React from 'react';
import { shallow, mount } from 'enzyme';
import Sections from '.';
import Greeting from '../Greeting';
import Education from '../Education';
import Experience from '../Experience';
import Contact from '../Contact';

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

const render = () => shallow(<Sections {...defaultProps} />);

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
    render();
    expect(defaultProps.fetchContent).toHaveBeenCalledWith();
  });
});
