import { connect } from 'react-redux';
import Page from '../../components/Page';
import { getTheme } from '../../state/selectors';

const mapStateToProps = state => ({
  theme: getTheme(state)
});

export default connect(mapStateToProps, undefined)(Page);
