const { RESTDataSource } = require("apollo-datasource-rest");
class ChuckNorrisAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.chucknorris.io/jokes";
  }

  categoryObj(category, index) {
    let id = index + 1;
    return {
      id: id,
      name: category
    };
  }

  jokeObj(joke) {
    return {
      id: joke.id,
      category: joke.categories[0],
      iconUrl: joke.icon_url,
      url: joke.url,
      value: joke.value,
      createdAt: joke.created_at,
      updatedAt: joke.updated_at
    };
  }

  async getCategories() {
    const res = await this.get("categories");
    return Array.isArray(res)
      ? res.map((category, index) => {
          return this.categoryObj(category, index);
        })
      : [];
  }

  async getJoke({ category }) {
    const res = await this.get("random", { category });
    return this.jokeObj(res);
  }
}

module.exports = ChuckNorrisAPI;
