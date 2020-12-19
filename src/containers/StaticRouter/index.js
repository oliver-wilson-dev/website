import { connect } from 'react-redux';
import StaticRouter from '../../components/StaticRouter';
import { getLocation } from '../../state/selectors';

const mapStateToProps = state => ({
  location: getLocation(state)
});

export default connect(mapStateToProps)(StaticRouter);
