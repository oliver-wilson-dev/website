import React from 'react';
import classnames from 'classnames';
import styles from '../index.css';

export default {
  title: 'Experience',
  content:
  <div>
    <h3 className={styles.companyTitle}>ASOS</h3>
    <h4 className={styles.jobRole}>
      Associate Web Developer
    </h4>
    <h4>September 2017 - present</h4>
    <p>
      <span className={styles.paragraphEmoji} role="img" aria-label="university emoji">💻</span>
        After being accepted for the first official graduate scheme for the web platform
        at asos I was catapulted into a number of projects that aided my personal
        and technical growth.
    </p>
    <p>
        During my time at asos I have been tasked with creating an internal react app that
        is used by the photography studios (the team that capture the product images displayed
        on the site) to coordinate their work and allow them to continue to deliver great assets
        while optimising their time and productivity.
    </p>
    <p>
        I have continued to maintain the Product Listing Page (PLP) which is an isomorphic app
        that responds to multiple viewports and is supported by a wide range of browsers.
        SEO is very important for the page as asos needs to stay ahead of its competitors and
        therefore rank higher in search results.
    </p>
    <p>
        I have been a key team member in the replatforming of the Saved Items application,
        employing a tech stack of react, redux and node,
        while using webpack to build the application as well as utilising babel and postcss
        to use the latest syntax available to developers.
    </p>
    <div className={styles.projectImages}>
      <div className={styles.projectImage}>
        <img alt="ASOS Product Listing Page" src="https://github.com/oliver-wilson-dev/oliver-wilson-dev.github.io/blob/master/public/img/plp.png?raw=true" />
      </div>
      <div className={classnames(styles.projectImage, styles.lastProjectImage)}>
        <img alt="ASOS Saved Lists Page" src="https://github.com/oliver-wilson-dev/oliver-wilson-dev.github.io/blob/master/public/img/saved-lists.png?raw=true" />
      </div>
    </div>
  </div>,
};
