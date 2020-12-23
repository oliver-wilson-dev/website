# Oliver Wilson's Portfolio

This is a project that I've created for two reasons:

- **0.** To showcase my skills as a software engineer.
- **1.** To have some fun experimenting with different technologies.

I reference my experiences that I have gained through working on some interesting projects during my career and I also detail some of my interests outside of web development.

You can visit the site here: **https://www.oliverwilson.dev/**.

The application is an express server, hosted in the cloud that responds to routes and then handles them routes via react router. The choice for the application being an express server vs a static site served by a CDN is so that the application can be isomorphic and render on the server, as well as on the client. There are major performance benefits as a result of server side rendering, plus implementing the concept allows for a deeper exposure to webpack architecture.

## Hosting

This website is hosted as an [app engine](https://cloud.google.com/appengine) on the Google Cloud Platform.

The app is built via some github actions and then when deployed to the Google Cloud Platform app engine the script `npm run start` will be ran.

## Colour scheme

The colour scheme followed for this website is largely utilised from [this pallet](https://coolors.co/ef476f-ffd166-06d6a0-118ab2-073b4c).

## Workflow

The workflow for this project largely follows the git flow methodology.

1. Branch off of `develop`

2. Do whatever work needs to be done in `feature branch`

3. Create a PR against `develop`

   - The [PR github action](./.github/workflows/PR.yaml) will be ran against the `feature branch`
   - If the action passes, then the PR can be merged

4. Repeat steps 1 - 3 as many times as desired, ideally we release in small deltas often, but sometimes we might want to merge in a few PRs before we create a release candidate.

5. When `develop` contains the changes you want to release, create a PR from `develop` against `master`, once this is merged (you could have also done the merge locally and pushed, but ideally we'd never push to `master` from a development machine). Once merged, the [release github action](./.github/workflows/release.yaml) will run, which builds the application and deploys it to the Google Cloud Platform.
