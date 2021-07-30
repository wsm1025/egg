'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.get('/fruit', controller.fruit.index);
  // router.get('/fruit/:id', controller.fruit.getID);
  // router.get('/createfruit',app.middleware.checkToken() ,controller.fruit.createPage);
  // router.post('/createfruit', controller.fruit.createFruit);
  router.resources('fruit', '/fruits', controller.fruit);
};
