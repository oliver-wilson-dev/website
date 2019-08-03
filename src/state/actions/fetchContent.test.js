import axios from 'axios';
import { FETCH_CONTENT, FETCH_CONTENT_FAILURE, SECTIONS_API_ENDPOINT } from './constants';
import fetchContent from './fetchContent';

jest.mock('axios', () => ({ get: jest.fn() }));

const fetchContentAsyncReturn = fetchContent();
const mockDispatch = jest.fn(_ => _);
const mockAxiosGet = { data: Symbol('test-axios-get') };

const makeCommonAssertions = () => {
  it(`should call axios's get method with ${SECTIONS_API_ENDPOINT}`, async () => {
    await fetchContentAsyncReturn(mockDispatch);
    expect(axios.get).toHaveBeenCalledWith(SECTIONS_API_ENDPOINT);
  });
};

describe('fetchContent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    axios.get.mockReturnValue(mockAxiosGet);
  });

  describe('when the sections api returns data', () => {
    makeCommonAssertions();

    it(`should call dispatch with an action of type ${FETCH_CONTENT} and the correct payload`, async () => {
      await fetchContentAsyncReturn(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(
        { type: FETCH_CONTENT, payload: mockAxiosGet.data }
      );
    });
  });

  describe('when the sections api returns unexpected results', () => {
    beforeEach(() => {
      axios.get.mockReturnValue(undefined);
    });
    it(`should call dispatch with an action of type ${FETCH_CONTENT_FAILURE} and the correct payload`, async () => {
      await fetchContentAsyncReturn(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(
        { type: FETCH_CONTENT_FAILURE, error: expect.anything() }
      );
    });
  });
});
