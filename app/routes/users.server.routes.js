const users = require('../../app/controllers/users.server.controller');

module.exports = (app) => {

  // add routes to post user
  app.route('/api/v1/users')
    .post(users.userByUsername, users.create);

  // add routes to get, update, delete users by userID
  app.route('/api/v1/users/:userId')
    .get(users.read)
    .put(users.userByUsernameDiffID, users.update)
    .delete(users.delete);

  app.param('userId', users.userByID);
};
