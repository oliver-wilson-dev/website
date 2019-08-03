import { FETCH_CONTENT } from '../../actions/constants';
import fetchContent from './reduceCases/fetchContent';

const initialState = {
  sectionsContentFetched: false,
  sections: {}
};

export default (state = initialState, { type: actionType, payload }) => new Proxy({
  [FETCH_CONTENT]: fetchContent({ payload, state }),
}, {
  get: (reduceCases, actionType) => (actionType in reduceCases ? reduceCases[actionType]() : state)
})[actionType];
