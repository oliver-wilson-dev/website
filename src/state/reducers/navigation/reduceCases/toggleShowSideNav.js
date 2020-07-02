const toggleShowSideNav = ({ state }) => () => ({
  ...state,
  showSideNav: !state.showSideNav
});


export default toggleShowSideNav;
