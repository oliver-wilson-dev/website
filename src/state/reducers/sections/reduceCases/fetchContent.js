const fetchContent = ({ payload, state }) => () => {
  const { sections } = payload;
  return {
    ...state,
    sectionsContentFetched: true,
    sections
  };
};


export default fetchContent;
