# Enigma Platform Team
## React Webapp Generator Changelog

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
