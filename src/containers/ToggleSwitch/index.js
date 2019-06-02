import { connect } from 'react-redux';
import ToggleSwitch from '../../components/ToggleSwitch';
import toggleTheme from '../../state/actions/toggleTheme';

const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(toggleTheme())
});

export default connect(undefined, mapDispatchToProps)(ToggleSwitch);
