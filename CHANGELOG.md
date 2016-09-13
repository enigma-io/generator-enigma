### 5.2.0 (9/13/2016)

Update various dependencies, including:

```
babel-jest           ^12.0.0  >>  ^15.0.0
eslint               ^2.0.0   >>  ^3.0.0
eslint-plugin-react  ^4.2.3   >>  ^6.0.0
jest-cli             ^13.0.0  >>  ^15.1.0
react                ^15.0.0  >>  ^15.3.0
react-dom            ^15.0.0  >>  ^15.3.0
```

Aside from the dependencies, the default test file extension has been changed from `__tests__/index.js` style to `*.spec.js`. The primary reason was reduced confusion due to the test file living alongside what it's targetting; it's also harder to accidentally forget the tests exist for a file in general when they're co-located in the same directory. This fits into the organization guidelines set forth in [A maintainable front-end project structure (2016)](https://medium.com/@ultraviol3tlux/maintainable-front-end-project-structures-2ce0dca2fe2d).

Before:

```
/
    component-x/
        __tests__/
            index.js
        index.js
    component-y/
        __tests__/
            index.js
        index.js
```

After:

```
/
    component-x/
        index.js
        index.spec.js
    component-y/
        index.js
        index.spec.js
```

Thank you for using `generator-enigma`!

---

### 5.1.0 (6/21/2016)

__[Feature] Optional react-router installation, + 2 misc fixes__ (0fb2c08)

There is now an additional prompt during `yo enigma` on whether
you want to automatically have react-router set up. It will default
to HTML5 pushstate-based routing, which budo is configured to support.

+ Fixed static/index.html using relative paths when they should always
  be absolute to the serving root when using pushstate-based routing,
  since path nesting is an illusion.

+ No longer using `<main>` as the React root, as semantically it may
  make more sense to be used deeper in the nested tree adjacent to a
  `<header>` or something similar.

---

### 5.0.5 (6/15/2016)

__Ignore /public from linting__ (2da81fb)

---

### 5.0.4 (6/15/2016)

- __Rename dist -> public__ (be44957) This naming more closely follows the convention set by other
popular projects, and feels a little more obvious.

---

### 5.0.3 (5/30/2016)

- __Remove an excess level of globbing in the main `style.styl`__ (bec96ee)

---

### 5.0.2 (5/23/2016)

- __Prevent src/style.styl from importing itself__ (253ac42)

---

### 5.0.1 (5/21/2016)

- __Also watch dist/ for CSS changes__ (113fa16) Fixes livereload not picking up changes in the emitted CSS.

---

### 5.0.0 (5/19/2016)

- __Bump minimum Node version to 4.0__ (6e2a0db)
- __Fix a yosay bug__ (7bef882) The prompts were showing up in the middle of the yosay speech bubble for some reason.
- __Update overall structure, add babel static class method plugin__ (eb82fc4)
    1. added `src/` at the root of every project to keep your working files clean and separate from everything else
    2. merged the sanitize stylesheet into the top-level `style.styl`
    3. updated various files with newer ES6+ conveniences
    4. added the babel "transform-class-properties" plugin to enable static class property shortcuts
       (part of the enhancements in #3)
    5. removed the `LICENSE` file in favor of the simple license field in `package.json`
    6. reorganized where static assets are meant to live; place your images, fonts, etc in `src/static/assets`
       and they will be copied over to `/dist` during the build process
    7. switched the dev server (budo) invocation from the CLI to using it as a library; see `scripts/budo.js`

---

### 4.5.0 (5/9/2016)

- __Remove the dead eslintify reference__ (d6fcff6ba646216f3eab3b47f2cdc59013f12148)

---

### 4.4.0 (4/28/2016)

- __Update to Jest 12.x__ (51af942f398f217e760d9346bb1e4a369039b4cb) Perf improvements, especially for large projects

---

### 4.3.0 (4/18/2016)

- __Sub-out eslintify for eslint__ (c1b4fff) Allows for watch mode usage if desired.
- __Use the Github node gitignore template__ (7c5d3a3)
- __Upgrade to React 15.x__ (83453c8) No codebase changes.
- __Rename __tests__/unit.js -> __tests__/index.js__ (2863e57)
- __Ignore node_modules when linting__ (2fb5c67)

---

### 4.2.1 (3/29/2016)

- Update babel-eslint to non-beta 6.x (1ad349baa82413b10863d67e13f40cbc2e6c276c)

---

### 4.2.0 (3/22/2016)

- Update jest, remove outdated coverage information (73efac24b372ac7de1b207323d65528f9db5be02)

  The bug in Jest was fixed around coverage collection, so it's no longer necessary to manually specify the files to collect from.

- Update dependencies, remove unnecessary Jest configs (b2f1d50af47ffb207c5d1bb6b7e4266b11341679)

- Remove unnecessary eslintrc configs (e58f4f8a359a80affe041dc53d4b48a24035d3a5)

---

### 4.1.3 (3/3/2016)

- .gitignore -> _gitignore template to fix npm/yeoman screwing with the file and rewriting to something unexpected

---

### 4.1.2 (3/3/2016)

- remove/revise the headers of a few static .md files in the repository (no code changes)

---

### 4.1.1 (3/2/2016)

- update babel-jest to 5.x (needed for eslint 2 compatibility)

---

### 4.1.0 (3/2/2016)

- update eslintify to 2.x
- update eslintrc to reflect the changes in eslint 2.x

---

### 4.0.4 (1/15/2016)

- add CONTRIBUTING.md
- add CHANGELOG_policy.md
- update README.md
- change default package.json version in the template from `0.0.1` to `0.1.0` (see the [SemVer 2.0 FAQ](http://semver.org/))

---

### 4.0.1, 4.0.2, 4.0.3 (1/14/2016)

Updated package metadata, README.

---

### 4.0.0 (1/14/2016)
#### Breaking Changes

__SCSS has been removed in favor of Stylus.__

Both tools have similar feature sets, the move is largely driven by codebase quality and ease of integration. The watcher in Stylus is far superior to that of the SCSS implementation in Ruby and allows for highly desirable features like `@import` globbing (used in the root `style.styl`).

Learn more about the language at [stylus-lang.com](http://stylus-lang.com/). _Note: you can still [write normal CSS](http://stylus-lang.com/docs/css-style.html) in the `.styl` files, special syntax is not needed._

#### Other Changes

- Updated dependencies
- Renamed some npm scripts to be cleaner
- Switched to "forever" license schema (e.g. 2016-present)

---

### 3.0.0 (12/4/2015)
#### Breaking Changes

__Switched to Jest / Jasmine for testing.__

PhantomJS is very problematic to build on testing hosts and generally doesn't work very well. Jest handles all unit testing needs very well and can do a large amount of functional (browser-emulated) testing as well.

#### Other Changes

- Updated Budo dependency to v7.x
- Added new `npm lint` target for code style checking (also is automatically included during `npm start`)

---

### 2.0.0 (11/18/2015)
#### Breaking Changes

__Webpack has been removed in favor of Browserify.__

This change is a precipitation of the standardization around Browserify by the Platform team.

#### Other Changes

- Babel (via `babelify`) has been updated to v6.x
- Rewrote most of the sample code to assume JSX transpilation and use more ES6 functionality

---

### 1.0.1 (6/23/2015)

- Switch to 4-space style instead of "tabs"
- Switch to `karma-chai-sinon` instead of separate modules (incompatibility with `karma-sinon`)
- Prefetch `react/addons` for increased build performance
- Moved `babel-loader` to `postLoaders`

---

### 1.0.0 (6/9/2015)

- Initial commit
