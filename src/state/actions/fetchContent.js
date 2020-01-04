import axios from 'axios';
import { FETCH_CONTENT, FETCH_CONTENT_FAILURE, SECTIONS_API_ENDPOINT } from './constants';

const fetchContent = () => async (dispatch) => {
  try {
    const { data } = await axios.get(SECTIONS_API_ENDPOINT);

    dispatch({ type: FETCH_CONTENT, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_CONTENT_FAILURE, error });
  }
};

export default fetchContent;
