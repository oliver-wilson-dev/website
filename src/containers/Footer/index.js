import { connect } from 'react-redux';
import Footer from '../../components/Footer';
import learnMoreClicked from '../../state/actions/learnMoreClicked';
import { getSectionsContentFetched } from '../../state/selectors';

const mapStateToProps = state => ({
  sectionsContentFetched: getSectionsContentFetched(state)
});
const mapDispatchToProps = dispatch => ({
  learnMoreClicked: () => dispatch(learnMoreClicked())
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
