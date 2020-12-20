import React from 'react';
import classnames from 'classnames';
import useFadeInClasses from '../../hooks/useFadeInClasses';
import styles from './index.css';

const ProfilePicture = () => {
  const { fadeInClasses } = useFadeInClasses();

  return (
    <img
      className={classnames(styles.profilePicture, fadeInClasses)}
      src="public/img/profile-pic.jpg"
      alt="A shot of me"
      width="200"
      height="200"
    />
  );
};

export default ProfilePicture;
