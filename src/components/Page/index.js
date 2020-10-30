import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import useBackgroundClasses from '../../hooks/useBackgroundClasses';

import styles from './index.css';

const Page = ({ additionalStyles, children, theme }) => {
  const backgroundClasses = useBackgroundClasses({ theme });

  return (
    <div className={cn(styles.page, backgroundClasses, additionalStyles)}>{children}</div>
  );
};

Page.propTypes = {
  additionalStyles: PropTypes.string,
  theme: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Page;
