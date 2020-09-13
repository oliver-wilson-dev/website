import { connect } from 'react-redux';
import Header from '../../components/Header';
import toggleShowSideNav from '../../state/actions/toggleShowSideNav';

const mapDispatchToProps = dispatch => ({
  toggleShowSideNav: () => dispatch(toggleShowSideNav())
});

export default connect(undefined, mapDispatchToProps)(Header);
