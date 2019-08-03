const fetchContent = ({ payload: { sections }, state }) => () => (
  {
    ...state,
    sectionsContentFetched: true,
    sections
  }
);


export default fetchContent;
