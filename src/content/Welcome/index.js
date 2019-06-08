import React from 'react';
import styles from '../index.css';

export default {
  title: 'Nice to meet you!',
  content:
  <div>
    <p>
      <span className={styles.paragraphEmoji} role="img" aria-label="university emoji">👋</span>
      {' '}
        Hi, my name is Oliver Wilson and I am
      {' '}
      <span className={styles.strikethroughJoke}>a machine that turns coffee into code</span>
      {' '}
        a web developer.
    </p>
    <p>
      {`I've created this website as a small project for me to experiment with new technologies
        and allow potential employers to gain an understanding of my skill set and interests.`}
    </p>
    <p>
      {'The site is built using React, Redux (at the moment the only use case is a potentially over-engineered light switch), PostCSS, Webpack, Babel and has 100% unit test code coverage using the Jest testing framework.'}
    </p>
    <p>
      {'The site is hosted using Github Pages and the domain is configured through a combination of Google Domains and Cloudflare.'}
    </p>
    <p>
      {'I soon hope to add automation tests using Cypress.'}
    </p>
  </div>
};
