# Enigma Platform Team
## React Webapp Generator for Yeoman

1. [Installation](#installation)
1. [Usage](#usage)
1. [Testing](#testing)

Scaffolding for automation of basic tooling and tasks typically required by React projects, including:

- Generation of JSX views and associated test files
- CommonJS module bundling via [Browserify](http://browserify.org/)
- Code quality assessment & style enforcement via [ESLint](http://eslint.org/)


### Installation

1. Pull down this repo
   ```
   git clone git@github.com:enigma-platform/scaffold-fe-reactapp.git
   ```
1. Run `npm install` in the folder and then `npm link`
1. If you don't have `yo` (Yeoman) installed, run `npm i -g yo`


### Usage

**To set up a new app, create a folder, enter it and run `yo enigma`**

The generator will ask a few questions and insert the prebuilt skeleton for a typical React-based webapp. Then you're rolling!

Once you've set up your app, check out the targets available in `package.json`. The conveniences available at `npm run <target>`:

- `build`: Compiles your application JS (with sourcemapping) to `dist/bundle.js`
- `release`: Compiles and minifies your application JS (without sourcemapping) to `dist/bundle.min.js`
- `start`: Compiles your app and boots up a livereload server. Just navigate to the URL provided and make changes to your files (JS, JSX, SCSS)
- `test`: Runs Karma against your unit tests. (will automatically include any file named `unit.js`)


### Testing

The [Karma](http://karma-runner.github.io/0.13/index.html) test runner is included by default, supported by the [Mocha](http://devdocs.io/mocha/) unit testing framework, [Chai](http://devdocs.io/chai/api/bdd/index) expectation library and [Sinon](http://devdocs.io/sinon/) spy/stub/mock engine.
