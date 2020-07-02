import { connect } from 'react-redux';
import Header from '../../components/Header';
import { getShowSideNav } from '../../state/selectors';
import toggleShowSideNav from '../../state/actions/toggleShowSideNav';

const mapStateToProps = state => ({
  showSideNav: getShowSideNav(state)
});

const mapDispatchToProps = dispatch => ({
  toggleShowSideNav: () => dispatch(toggleShowSideNav())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
