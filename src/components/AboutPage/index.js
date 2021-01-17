/* eslint-disable max-len */
import React from 'react';
import cn from 'classnames';
import ReactMarkdown from 'react-markdown';
import markdown from './index.md';
import sharedStyles from '../../styles/shared.css';
import styles from './index.css';
import Page from '../../containers/Page';

const renderers = {
  heading: (props) => {
    if (props.level !== 1) {
      return React.createElement(`h${props.level}`, {}, props.children);
    }

    return <h1 className={cn(sharedStyles.pageHeader, styles.pageHeader)}>{props.children}</h1>;
  },
  list: ({ children }) => <ul className={styles.unorderedList}>{children}</ul>

};

const AboutPage = () => (
  <Page>
    <article className={styles.article}>
      <ReactMarkdown source={markdown} renderers={renderers} />
    </article>
  </Page>
);

export default AboutPage;
