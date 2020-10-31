# Oliver Wilson's Portfolio

This is a project that I've created for two reasons:

- **0.** To showcase my skills as a software engineer.
- **1.** To have some fun experimenting with different technologies.

I reference my experiences that I have gained through working on some interesting projects during my career and I also detail some of my interests outside of web development.

You can visit the site here: **https://www.oliverwilson.dev/**.

The application is an express server, hosted in the cloud that responds to routes and then handles them routes via react router. The choice for using an express server to respond to requests and serve a client-side rendered application is to afford flexibility to move towards server-side rendering in the future.

## Hosting

This website is hosted as an [app engine](https://cloud.google.com/appengine) on the Google Cloud Platform.

### Github pages CNAME file

Please read more on the topic [here](https://ouyi.github.io/post/2018/01/14/github-pages-cname-file.html)

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
