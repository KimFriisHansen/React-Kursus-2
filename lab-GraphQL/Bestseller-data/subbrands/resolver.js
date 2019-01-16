const subBrands = require('./data');

exports.resolver = {
    Query: {
        subBrands: () => subBrands,
    },
};