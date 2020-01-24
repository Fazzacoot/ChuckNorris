const resolvers = {
  Query: {
    categories: async (_, __, { dataSources }) => {
      const getCategories = await dataSources.chuckNorrisAPI.getCategories();
      return getCategories;
    },
    joke: async (_, {category}, { dataSources }) => {
      const getJoke = await dataSources.chuckNorrisAPI.getJoke({category});
      return getJoke;
    }
  }
};

module.exports = resolvers;
