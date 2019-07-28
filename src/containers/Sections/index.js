import { connect } from 'react-redux';
import Sections from '../../components/Sections';
import fetchContent from '../../state/actions/fetchContent';
import { getSections, getSectionsContentFetched } from '../../state/selectors';

const mapStateToProps = state => ({
  sections: getSections(state),
  sectionsContentFetched: getSectionsContentFetched(state)
});

const mapDispatchToProps = dispatch => ({
  fetchContent: () => dispatch(fetchContent())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sections);
