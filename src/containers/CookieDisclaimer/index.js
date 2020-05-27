import { connect } from 'react-redux';
import CookieDisclaimer from '../../components/CookieDisclaimer';
import { getShowLearnMore } from '../../state/selectors';

const mapStateToProps = state => ({
  showLearnMore: getShowLearnMore(state),
});

export default connect(mapStateToProps)(CookieDisclaimer);
