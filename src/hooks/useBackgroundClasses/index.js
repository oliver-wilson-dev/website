import { useMemo } from 'react';
import classnames from 'classnames';
import styles from './index.css';
import { DARK_THEME } from '../../state/actions/constants';

const useBackgroundClasses = ({ theme }) => useMemo(
  () => classnames(styles.themeBackground, {
    [styles.themeBackground__dark]: theme === DARK_THEME
  }),
  [theme]
);

export default useBackgroundClasses;
