# Enigma Platform Team
## React Webapp Generator for Yeoman

---

1. [Installation](#installation)
1. [Usage](#usage)
1. [Testing](#testing)

---

Scaffolding for automation of basic tooling and tasks typically required by React projects, including:

- CommonJS module bundling via [Browserify](http://browserify.org/)
- ES2015 syntax support and transpilation via [Babel](https://babeljs.io/)
- Code quality assessment & style enforcement via [ESLint](http://eslint.org/)
- [Stylus](http://stylus-lang.com/) CSS preprocessing & automatic vendor prefix management via [Autoprefixer](https://github.com/postcss/autoprefixer#autoprefixer-)
- Unit testing via the [Jest](https://facebook.github.io/jest/) framework and [Jasmine2](http://jasmine.github.io/2.0/introduction.html) test runner

---

### Installation

1. Pull down this repo
   ```
   git clone git@github.com:enigma-platform/scaffold-fe-reactapp.git
   ```
1. Run `npm install` in the folder and then `npm link`
1. If you don't have `yo` (Yeoman) installed, run `npm i -g yo`

[back to top](#react-webapp-generator-for-yeoman)

---

### Usage

**To set up a new app, create a folder, enter it and run `yo enigma`**

The generator will ask a few questions and insert the prebuilt skeleton for a typical React-based webapp. Then you're rolling!

Once you've set up your app, check out the targets available in `package.json`. The conveniences available at `npm run <target>`:

- `build`: Compiles your application JS (with sourcemapping -- good for debugging) to `dist/bundle.js`
- `release`: Compiles and minifies your application JS (without sourcemapping) to `dist/bundle.min.js`
- `start`: Compiles your app and boots up a livereload server -- just make changes to your files (JS, Stylus/CSS, etc.)
- `test`: Runs your unit tests. (will automatically include any file inside of folders named `__tests__`)
- `lint`: Checks your project for JS code style, according to the rules in `.eslintrc`

[back to top](#react-webapp-generator-for-yeoman)

---

### Testing

The [Jasmine 2](http://jasmine.github.io/2.0/introduction.html) test runner is included by default, as a part of the [Jest](https://facebook.github.io/jest/) unit testing framework.

[back to top](#react-webapp-generator-for-yeoman)

---

This module adheres to [Semantic Versioning](http://semver.org/).

MIT
