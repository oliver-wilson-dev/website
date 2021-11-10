import React from 'react';
import cn from 'classnames';
import sharedStyles from '../../styles/shared.css';
import Page from '../../containers/Page';
import ProjectTile from '../ProjectTile';
import styles from './index.css';

const ProjectsPage = () => (
  <Page additionalStyles={styles.projectsPage}>
    <h1 className={cn(sharedStyles.pageHeader, styles.pageHeader)}>Projects</h1>
    <div className={styles.projectGrid}>
      <ProjectTile
        name="oliverwilson.dev"
        description="I made the website that you're on right now! Definitely check out the code to see how it is built."
        codeHref="https://github.com/oliver-wilson-dev/oliver-wilson-dev.github.io"
        technologies={['react', 'redux', 'node', 'express', 'SSR', 'jest', 'enzyme']}
      />
      <ProjectTile
        name="Sip or Skip"
        description="A fun drinking game that utilises websockets (via socket.io) to provide a real time synchronised experience for users. Answer questions and complete dares in a given time or else you have to take a sip from your drink... or you can choose to skip."
        codeHref="https://github.com/oliver-wilson-dev/sip-or-skip"
        technologies={['react', 'redux', 'node', 'websockets']}
      />
      <ProjectTile
        name="World Explorer"
        description="A country selector that displays information retrieved from a GraphQL enabled API. I made this project to experiment with and learn how to make GraphQL queries."
        codeHref="https://github.com/oliver-wilson-dev/world-explorer"
        demoHref="https://oliver-wilson-dev.github.io/world-explorer/"
        technologies={['react', 'GraphQL']}
      />
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
