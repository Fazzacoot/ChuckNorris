const resolvers = {
  Query: {
    categories: async (_, __, { dataSources }) => {
      const getCategories = await dataSources.chuckNorrisAPI.getCategories();
      return getCategories;
    }
  }
};

module.exports = resolvers;