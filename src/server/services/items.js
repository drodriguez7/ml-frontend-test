const meliApi = require('../lib/meliApi');

const signature = {
  author: {
    name: 'Diego',
    lastName: 'Rodríguez',
  },
};

const getCategories = (filters = []) => {
  const categoryFilter = filters.filter((filter) => filter.id === 'category')[0];
  let categoryList = [];

  if (categoryFilter && categoryFilter.values) {
    categoryList = categoryFilter.values[0].path_from_root.map((item) => item.name);
  }

  return categoryList;
};

const getPrice = (price) => {
  const priceSplit = price.toString().split('.');
  return {
    amount: parseInt(priceSplit[0], 10),
    decimals: parseInt(priceSplit[1], 10) || 0,
  };
};

const fetchItems = async (searchQuery) => {
  const apiResponse = await meliApi.get('/sites/MLA/search', { q: searchQuery, limit: 4 });
  const { results = [], filters } = apiResponse.data;

  const categories = getCategories(filters);
  let items = [];

  if (results && results.length) {
    items = results.map((result) => {

      return {
        id: result.id,
        title: result.title,
        price: {
          currency: result.currency_id,
          ...getPrice(result.price),
        },
        picture: result.thumbnail,
        condition: result.condition,
        free_shipping: result.shipping.free_shipping,
        location: result.address.state_name,
      };
    });
  }

  return {
    ...signature,
    categories,
    items,
  };
};

const fetchItem = async (id) => {
  const itemResponse = meliApi.get(`/items/${id}`);
  const descriptionResponse = meliApi.get(`/items/${id}/description`);

  const [item, description] = await Promise.all([itemResponse, descriptionResponse]);

  const itemData = item.data;
  const descriptionData = description.data;

  const price = {
    amount: itemData.price,
    currency: itemData.currency_id,
    decimals: 2,
  };

  const currencyResponse = await meliApi.get(`/currencies/${itemData.currency_id}`);
  const currencyData = currencyResponse.data;

  price.decimals = currencyData.decimal_places;

  const categoryResponse = await meliApi.get(`/categories/${itemData.category_id}`);
  const categoryData = categoryResponse.data;

  const categories = categoryData.path_from_root.map((category) => (category.name));

  return {
    ...signature,
    item: {
      id: itemData.id,
      title: itemData.title,
      price,
      picture: itemData.thumbnail,
      condition: itemData.condition,
      free_shipping: itemData.shipping.free_shipping,
      sold_quantity: itemData.sold_quantity,
      description: descriptionData.plain_text,
    },
    categories,
  };
};

module.exports = {
  fetchItem,
  fetchItems,
};
