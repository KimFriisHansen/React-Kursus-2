const brandHouses = require('./data');

exports.resolver = {
    Query: {
        brandHouses: () => brandHouses,
    },
};