const brands = require('./data');

exports.resolver = {
    Query: {
        brands: () => brands,
    },
};