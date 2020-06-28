import { connect } from 'react-redux';
import CookieDisclaimer from '../../components/CookieDisclaimer';
import { getShowLearnMore, getShowCookiePopup } from '../../state/selectors';

const mapStateToProps = state => ({
  showCookiePopup: getShowCookiePopup(state),
  showLearnMore: getShowLearnMore(state),
});

export default connect(mapStateToProps)(CookieDisclaimer);
