'use strict';

/*
    Auto-discover all unit test files - make as many directories as you want, etc.

    A common pattern is to have a directory for mocks, one for components, one for stores etc.
*/

var context = require.context('../test', true, /^(?!unit.js|bind.js).*\.jsx?$/);

context.keys().forEach(context);
