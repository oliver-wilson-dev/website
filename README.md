# Oliver Wilson Portfolio

This is a React application deployed via Github pages.

The site is built using React, Redux, PostCSS, Webpack, Babel and has 100% unit test code coverage using the Jest testing framework, complimented by Enzyme.

The domain is configured through a combination of Google Domains and Cloudflare. I've used a CICD workflow, following a git flow enabled approach towards my development. CirdleCI is used to automate the path-to-live for code changes to this website.

## Roadmap
- 💡Use `react-router` to handle invalid routes. E.g. will need a 404 page component that offers to redirect the user to the main site.

- 💡Adjust the `animation-timing-function` of the loading spinner, at the moment it's `linear`. `ease-in` or `ease-in-out` are better for loading spinners.

- 💡Introduce svgs for the show more/hide icons. The characters `+` and `-` are currently being used.

## Release Process
On each merge to develop, a build is triggered using CircleCI. The release process asserts that there is 100% unit test code coverage and enforces that there are no linting errors.

Providing that the above checks pass, the develop branch is then built and minified and packaged into the deployable assets required. These assets are then committed and pushed to the master branch, so that github pages can digest the assets and use them to serve requests to the website's domain. An automated commit message is used in the format of `Build no {build_number} {link_to_build}`

## License
[MIT](https://choosealicense.com/licenses/mit/)
