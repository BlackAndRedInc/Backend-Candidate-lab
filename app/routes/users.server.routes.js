const users = require('../../app/controllers/users.server.controller');

module.exports = (app) => {

  // add routes to post and list users - list for development only
  app.route('/users')
    .post(users.userByUsername, users.create)
    .get(users.list);

  // add routes to get, update, delete users by userID
  app.route('/users/:userId')
    .get(users.read)
    .put(users.userByUsernameDiffID, users.update)
    .delete(users.delete);

  app.param('userId', users.userByID);
};
