import sectionsReducer from '.';
import { FETCH_CONTENT } from '../../actions/constants';
import fetchContent from './reduceCases/fetchContent';

jest.mock('./reduceCases/fetchContent');

const mockFetchContent = Symbol('test-fetch-content');
const mockFetchContentCallback = jest.fn().mockReturnValue(mockFetchContent);

describe('sectionsReducer reducer', () => {
  beforeEach(() => {
    fetchContent.mockReturnValue(mockFetchContentCallback);
  });


  describe('when the action type is is FETCH_CONTENT', () => {
    describe('and a state is provided', () => {
      it('should return the result of fetchContent', () => {
        const mockPayload = Symbol('test-payload');
        expect(sectionsReducer({}, { type: FETCH_CONTENT, payload: mockPayload }))
          .toEqual(mockFetchContent);
      });

      it('should call fetchContent with the payload and state it was called with', () => {
        const mockState = Symbol('test-state');
        const mockPayload = Symbol('test-payload');
        sectionsReducer(mockState, { type: FETCH_CONTENT, payload: mockPayload });
        expect(fetchContent)
          .toHaveBeenCalledWith({ payload: mockPayload, state: mockState });
      });
    });

    describe('and no state is provided', () => {
      it('should call fetchContent with the initialState expected', () => {
        const mockPayload = Symbol('test-payload');
        sectionsReducer(undefined, { type: FETCH_CONTENT, payload: mockPayload });
        expect(fetchContent)
          .toHaveBeenCalledWith({
            state: {
              sectionsContentFetched: false,
              sections: {}
            },
            payload: mockPayload
          });
      });
    });
  });

  describe('when the action type is is not recognised', () => {
    const action = { type: Symbol('some-other-action-type') };
    describe('and a state is provided', () => {
      it('should return state', () => {
        const state = Symbol('test-state');
        expect(sectionsReducer(state, action)).toEqual(state);
      });
    });

    describe('and no state is provided', () => {
      it('should return the default state, with the useLightTheme property true', () => {
        expect(sectionsReducer(undefined, action))
          .toEqual({
            sectionsContentFetched: false,
            sections: {}
          });
      });
    });
  });
});
