import { connect } from 'react-redux';
import App from '../../components/App';
import { getUseLightTheme } from '../../state/selectors';

const mapStateToProps = state => ({
  useLightTheme: getUseLightTheme(state)
});

export default connect(mapStateToProps, undefined)(App);
