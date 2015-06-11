# Enigma Platform Team
## React Webapp Generator for Yeoman

Scaffolding for automation of basic tooling and tasks typically required by React projects, including:

- Generation of JSX views and associated test files
- CommonJS module bundling via [Webpack](http://webpack.github.io/)
- Code quality assessment & style enforcement via [ESLint](http://eslint.org/)

##Installation
1. Pull down this repo
2. Run `npm install` in the folder and then `npm link`
3. If you don't have `yo` (Yeoman) installed, run `npm i -g yo`

##Usage
**To set up a new app, create a folder, enter it and run `yo enigma`**
The generator will ask a few questions and insert the prebuilt skeleton for a typical React-based webapp. Then you're rolling!

**To create a new component inside an existing app, run `yo enigma:c`**
A JSX file and corresponding unit test file will be automatically created.

Once you've set up your app, check out the targets available in `package.json`. The conveniences available at `npm run <target>`:

- `start`: Compiles your app and boots up a livereload server. Just navigate to the URL provided and make changes to your files (JS, JSX, SCSS)
- `test`: Runs Karma against your unit tests in headless mode.
- `coverage`: coverage scanner, see the compiled result in `artifacts/coverage`
- `debug`: unit testing in a launched browser window with the devtools debugger and sourcemaps

If you don't want to work "live" on your files, `npm run build` will compile all the assets to the `release/` folder and `npm run release` will do the same, but remove all testing and debugging code from the finalized bundles.

###Testing
The [Karma](http://karma-runner.github.io/0.12/index.html) test runner is included by default, supported by the [Mocha](http://devdocs.io/mocha/) unit testing framework, [Chai](http://devdocs.io/chai/api/bdd/index) expectation library and [Sinon](http://devdocs.io/sinon/) spy/stub/mock engine.

###For future maintainers...
**jsx-loader and react major/minor versions should match in package.json (_XX.XX_.XXXX)**
patch versions can differ without issue
