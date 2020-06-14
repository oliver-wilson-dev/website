import { connect } from 'react-redux';
import ThemeToggle from '../../components/ThemeToggle';
import { getTheme } from '../../state/selectors';
import toggleTheme from '../../state/actions/toggleTheme';

const mapStateToProps = state => ({
  theme: getTheme(state)
});

const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(toggleTheme())
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggle);
