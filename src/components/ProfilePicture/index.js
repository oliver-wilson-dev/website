import React from 'react';
import classnames from 'classnames';
import styles from './index.css';

import useFadeInClasses from '../../hooks/useFadeInClasses';


const ProfilePicture = () => {
  const { fadeInClasses } = useFadeInClasses();

  return (
    <img
      className={classnames(styles.profilePicture, fadeInClasses)}
      src="public/img/profile-pic.jpg"
      alt="A shot of me"
    />
  );
};

export default ProfilePicture;
