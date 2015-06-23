'use strict';

/*
    Auto-discover all unit test files - make as many directories as you want, etc.

    A common pattern is to have a directory for mocks, one for components, one for stores etc.
*/

var context = require.context('.', true, /-test\.jsx?$/);

context.keys().forEach(context);
