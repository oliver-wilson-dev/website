import { connect } from 'react-redux';
import Footer from '../../components/Footer';
import learnMoreClicked from '../../state/actions/learnMoreClicked';

const mapDispatchToProps = dispatch => ({
  learnMoreClicked: () => dispatch(learnMoreClicked())
});

export default connect(undefined, mapDispatchToProps)(Footer);
