const glob = require('glob');
const Ajv = require('ajv');

const ajv = new Ajv();
glob.sync('./schema/definitions/**/*.json')
    .reverse()
    .map( file => require( file ) )
    // .forEach( file => console.log( file ))
    .forEach( schema => ajv.addSchema( schema ) );

const test = ( pattern, schema ) => {
    glob.sync( pattern ).forEach( file => {
        console.log( `Validating ${ file } against ${ schema.$id }` );
        const data = require( file );
        if ( ajv.validate( schema, data ) ) {
            console.log( 'Valid!' );
        } else {
            console.log( 'Invalid!', ajv.errors );
        }
    })
}

test( './examples/psa-collections/*.json', require('./schema/collection-item.json') );
test( './examples/a-power-store/*.json', require('./schema/product.json') );