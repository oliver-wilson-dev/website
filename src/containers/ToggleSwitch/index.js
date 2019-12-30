import { connect } from 'react-redux';
import ToggleSwitch from '../../components/ToggleSwitch';
import { getTheme } from '../../state/selectors';
import toggleTheme from '../../state/actions/toggleTheme';

const mapStateToProps = state => ({
  theme: getTheme(state)
});

const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(toggleTheme())
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleSwitch);
