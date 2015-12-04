# Enigma Platform Team
## React Webapp Generator Changelog

### 3.0.0 (12/4/2015)
#### Breaking Changes

__Switched to Jest / Jasmine for testing.__

PhantomJS is very problematic to build on testing hosts and generally doesn't work very well. Jest handles all unit testing needs very well and can do a large amount of functional (browser-emulated) testing as well.

#### Other Changes

- Updated Budo dependency to v7.x
- Added new `npm lint` target for code style checking (also is automatically included during `npm start`)

### 2.0.0 (11/18/2015)
#### Breaking Changes

__Webpack has been removed in favor of Browserify.__

This change is a precipitation of the standardization around Browserify by the Platform team.

#### Other Changes

- Babel (via `babelify`) has been updated to v6.x
- Rewrote most of the sample code to assume JSX transpilation and use more ES6 functionality


### 1.0.1 (6/23/2015)

- Switch to 4-space style instead of "tabs"
- Switch to `karma-chai-sinon` instead of separate modules (incompatibility with `karma-sinon`)
- Prefetch `react/addons` for increased build performance
- Moved `babel-loader` to `postLoaders`


### 1.0.0 (6/9/2015)

- Initial commit
