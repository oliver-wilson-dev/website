import { useEffect, useState } from 'react';
import { IS_SERVER } from '../../utils';
import sectionStyles from './index.css';

const useFadeInClasses = () => {
  const [visible, setVisible] = useState(IS_SERVER);

  useEffect(() => {
    setVisible(true);
  }, []);

  const fadeInClasses = {
    [sectionStyles.hiddenFadeIn]: true,
    [sectionStyles.show]: visible
  };

  return { fadeInClasses };
};

export default useFadeInClasses;
