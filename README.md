# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

Node version: 14.15.0

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Testing locally

```
yarn
yarn start
# Go to http://localhost:3000/
# Check web console for error
```

### Set up from scratch

```
npx create-docusaurus@2.0.0-beta.16 my-website classic
# Manually swizzle root: https://docusaurus.io/docs/swizzling#wrapper-your-site-with-root
yarn add @workpal-build/jwt-token-validation@latest
# Add polyfills for validation package in `docusaurus.config.js`
yarn add buffer stream-browserify util browserify-zlib https-browserify url crypto-browserify stream-http path-browserify assert tty-browserify os-browserify process
yarn start
```
