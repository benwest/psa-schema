const glob = require('glob');
const Ajv = require('ajv');

const ajv = new Ajv();

glob.sync('./schema/definitions/**/*.json')
    .reverse()
    .map(file => require(file))
    .forEach(schema => ajv.addSchema(schema));

const test = (pattern, schema) => {
    glob.sync(pattern).forEach(file => {
        console.log(`Validating ${file} against ${schema.$id}`);
        const data = require(file);
        if (ajv.validate(schema, data)) {
            console.log('Valid!');
        } else {
            console.log('Invalid!', ajv.errors);
        }
    })
}

test('./examples/visit-and-tickets.json', require('./schema/visit-and-tickets.json'));

test('./examples/a-power-store.json', require('./schema/a-power-store.json'));
test('./examples/a-power-store/*.json', require('./schema/product.json'));

test('./examples/about-psa.json', require('./schema/about-psa.json'));

test('./examples/psa-collections.json', require('./schema/psa-collections.json'));
test('./examples/psa-collections/*.json', require('./schema/artwork.json'));

test('./examples/whats-on.json', require('./schema/whats-on.json'));
test('./examples/whats-on/exhibitions.json', require('./schema/exhibitions.json'));
test('./examples/whats-on/exhibitions/*.json', require('./schema/exhibition.json'));
test('./examples/whats-on/activities.json', require('./schema/activities.json'));
test('./examples/whats-on/activities/*.json', require('./schema/activity.json'));
test('./examples/whats-on/news.json', require('./schema/news.json'));
test('./examples/whats-on/news/*.json', require('./schema/news-item.json'));
test('./examples/whats-on/program/*.json', require('./schema/program.json'));
test('./examples/whats-on/program/*/*.json', require('./schema/program-page.json'));

test('./examples/more/contact.json', require('./schema/page.json'));

test('./examples/search-results.json', require('./schema/search-results.json'));
