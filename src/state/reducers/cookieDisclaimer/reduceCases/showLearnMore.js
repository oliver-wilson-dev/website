const showLearnMore = ({ state }) => () => ({
  ...state,
  showLearnMore: !state.showLearnMore
});


export default showLearnMore;
