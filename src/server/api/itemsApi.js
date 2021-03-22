const itemsService = require('../services/items');

module.exports = (app) => {

  app.get('/api/items', async (req, res, next) => {
    try {
      const searchQuery = req.query.q;
      if (!searchQuery || searchQuery.length === 0) {
        res.status(400).send('Search query is required');
        return;
      }

      const items = await itemsService.fetchItems(searchQuery);
      res.status(200).send(items);
    } catch (error) {
      next(error);
    }
  });

  app.get('/api/items/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      if (!id || id.length === 0) {
        res.status(400).send('Id parameter is required');
        return;
      }

      const item = await itemsService.fetchItem(id);
      res.status(200).send(item);
    } catch (error) {
      next(error);
    }
  });
};
