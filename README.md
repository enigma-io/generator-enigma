# generator-enigma
__A React webapp scaffolding tool with best practice enforcement, automated testing, and more.__

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

```bash
npm i -g generator-enigma
```

The build script will automatically try to install Yeoman for you if it isn't installed already. Alternatively, you can do this yourself via

```bash
npm i -g yo
```

[back to top](#generator-enigma)

---

### Usage

**To set up a new app, create a folder, enter it and run `yo enigma`**

The generator will ask a few questions and insert the prebuilt skeleton for a typical React-based webapp. Then you're rolling!

Once you've set up your app, check out the targets available in `package.json`. The conveniences available at `npm run <target>`:

- `build`: Compiles your application JS (with sourcemapping -- good for debugging) to `public/assets/bundle.js` and style files (with sourcemapping) to `public/assets/style.css`

- `release`: Compiles and minifies your application JS (without sourcemapping) to `public/assets/bundle.min.js` and style files (without sourcemapping) to `public/assets/style.min.css` - the intent is you should be able to copy the contents of `public/` to a server and have it work without modification

- `start`: Compiles your app and boots up a livereload server -- just make changes to your files (JS, Stylus/CSS, etc.)

- `test`: Runs your unit tests. (will automatically include any file inside of folders named `__tests__`)
- `coverage`: Runs your unit tests and creates an LCOV coverage report in the `/coverage` directory
- `lint`: Checks your project for JS code style, according to the rules in `.eslintrc`

[back to top](#generator-enigma)

---

### Testing

The [Jasmine 2](http://jasmine.github.io/2.0/introduction.html) test runner is included by default, as a part of the [Jest](https://facebook.github.io/jest/) unit testing framework.

Jest's [automocking functionality](https://facebook.github.io/jest/docs/automatic-mocking.html) is disabled via the `"jest": {"automock": false}` `package.json` field. We've found this dramatically reduces the complexity of writing tests, but you can choose to enable it if desired.

[back to top](#generator-enigma)

---

This module adheres to [Semantic Versioning](http://semver.org/).
