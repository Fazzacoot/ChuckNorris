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

  async getCategories() {
    const res = await this.get("categories");
    return Array.isArray(res)
      ? res.map((category, index) => {
          return this.categoryObj(category, index);
        })
      : [];
  }
}

module.exports = ChuckNorrisAPI;
