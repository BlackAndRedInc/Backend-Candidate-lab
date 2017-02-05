module.exports = app => {
  // Wire the index.server.controller to the default route
  const index = require('../controllers/index.server.controller');
  app.get(['/','/api','/api/v1'], index.render)
};
