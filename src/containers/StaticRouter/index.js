import { connect } from 'react-redux';
import StaticRouter from '../../components/StaticRouter';
import { getLocation, getContext } from '../../state/selectors';

const mapStateToProps = state => ({
  location: getLocation(state),
  context: getContext(state)
});

export default connect(mapStateToProps)(StaticRouter);
