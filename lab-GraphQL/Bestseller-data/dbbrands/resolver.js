exports.resolver = {
    Query: {
        dbBrands: async (_, { id }, { dataSources }) => {
            return await dataSources.brandDbSource.findByMdmIdentifier({ id });
        },
    },
}
