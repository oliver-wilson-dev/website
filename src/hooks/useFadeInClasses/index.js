import { useEffect, useState } from 'react';
import sectionStyles from './index.css';

const useFadeInClasses = () => {
  const [visible, setVisible] = useState(false);

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
