# Enigma Platform Team
## React Webapp Generator Changelog

### 2.0.0 (11/18/2015)
#### Breaking Changes

1. Webpack has been removed in favor of Browserify. This change is a precipitation of the standardization around Browserify by the Platform team.

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
