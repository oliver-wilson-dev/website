import React from 'react';
import cn from 'classnames';
import sharedStyles from '../../styles/shared.css';
import styles from './index.css';
import Page from '../../containers/Page';
import ProjectTile from '../ProjectTile';

const ProjectsPage = () => (
  <Page>
    <h1 className={cn(sharedStyles.pageHeader, styles.pageHeader)}>Projects</h1>
    <div className={styles.projectGrid}>
      <ProjectTile
        name="To do list"
        description="A to do list that records list items in local storage. List items can be amended, marked as complete, removed and users can add new list items too."
        codeHref="https://github.com/oliver-wilson-dev/to-do-list"
        demoHref="https://oliver-wilson-dev.github.io/to-do-list"
        technologies={['react', 'redux', 'node']}
      />
      <ProjectTile
        name="Label PR Probot app"
        description={`Adding labels to pull requests makes it easier to view the status of a pull requests when looking at the pull request summaries page for a repository.
        When a pull request is opened the bot assigns the user that opened the pull request to the pull request.
        When a pull request is approved the bot adds a label to represent the number of approvals the PR has.`}
        codeHref="https://github.com/oliver-wilson-dev/label-prs"
        technologies={["Github's probot framework", 'node', 'javascript']}
      />
      <ProjectTile
        name="Automate Mac settings"
        description={`One of the main chores a developer faces is setting up a development machine. 
        Sure, it's easy to install visual studio code, git and your favorite browser, but it's the little things that really allow for productivity.`}
        codeHref="https://github.com/oliver-wilson-dev/settings"
        technologies={['Bash']}
      />
    </div>
  </Page>
);

export default ProjectsPage;
