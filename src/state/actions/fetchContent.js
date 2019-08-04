import axios from 'axios';
import { FETCH_CONTENT, FETCH_CONTENT_FAILURE, SECTIONS_API_ENDPOINT } from './constants';

export default () => async (dispatch) => {
  try {
    const { data } = await axios.get(SECTIONS_API_ENDPOINT);

    return dispatch({ type: FETCH_CONTENT, payload: data });
  } catch (error) {
    return dispatch({ type: FETCH_CONTENT_FAILURE, error });
  }
};
