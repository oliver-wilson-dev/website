import { connect } from 'react-redux';
import CookieDisclaimerMessage from '../../components/CookieDisclaimerMessage';
import learnMoreClicked from '../../state/actions/learnMoreClicked';
import cookiePolicyAccepted from '../../state/actions/cookiePolicyAccepted';

const mapDispatchToProps = dispatch => ({
  learnMoreClicked: () => dispatch(learnMoreClicked()),
  cookiePolicyAccepted: () => dispatch(cookiePolicyAccepted())
});

export default connect(undefined, mapDispatchToProps)(CookieDisclaimerMessage);
