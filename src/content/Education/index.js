import React from 'react';
import styles from '../index.css';

export default {
  title: 'Education',
  content:
  <div>
    <h3 className={styles.universityTitle}>The University of Kent</h3>
    <h4 className={styles.degreeTitle}>
      Bachelor of Science in
      {' '}
    </h4>
    <span>Computer Science</span>
    <h4 className={styles.degreeClassification}>
      Classification:
      {' '}
      <span>first</span>
    </h4>
    <p>
      <span className={styles.paragraphEmoji} role="img" aria-label="university emoji">🎓</span>
          I studied at the University of Kent for three years (2014 -2017)
          and obtained a first class degree with honours in Computer Sciecne upon my graduation.
    </p>
    <p>
          During my studies I worked on a number of exciting front end projects and really enjoyed
          the creativity that developing software for the web afforded me.
    </p>
  </div>,
};
