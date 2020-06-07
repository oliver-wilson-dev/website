import { connect } from 'react-redux';
import LearnMoreOverlay from '../../components/LearnMoreOverlay';
import learnMoreClicked from '../../state/actions/learnMoreClicked';

const mapDispatchToProps = dispatch => ({
  learnMoreClicked: () => dispatch(learnMoreClicked())
});

export default connect(undefined, mapDispatchToProps)(LearnMoreOverlay);
