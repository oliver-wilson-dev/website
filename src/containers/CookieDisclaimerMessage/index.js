import { connect } from 'react-redux';
import CookieDisclaimerMessage from '../../components/CookieDisclaimerMessage';
import learnMoreClicked from '../../state/actions/learnMoreClicked';

const mapDispatchToProps = dispatch => ({
  learnMoreClicked: () => dispatch(learnMoreClicked())
});

export default connect(undefined, mapDispatchToProps)(CookieDisclaimerMessage);
