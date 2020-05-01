const glob = require('glob');
const path = require('path');
const dir = path.join(process.cwd(), 'schema');

const schemas = {};
glob.sync(dir + '/**/*.json')
    .forEach(file => schemas[path.relative(dir, file)] = require(file));
process.stdout.write(JSON.stringify(schemas));