const users = require('../../app/controllers/users.server.controller');
const notes = require('../../app/controllers/notes.server.controller');

module.exports = (app) => {
  // add routes to post and list notes, user authentication required.
  // Only notes authored by account listed.
  app.route('/api/v1/notes')
    .post(users.isAuthenticated, notes.create)
    .get(users.isAuthenticated, notes.list);

  // add routes to get, update, delete notes by noteID
  // user authentication required
  // Only notes authored by account are authorized for get / put / delete
  app.route('/api/v1/notes/:noteId')
    .get(users.isAuthenticated, notes.isAuthorized, notes.read)
    .put(users.isAuthenticated, notes.isAuthorized, notes.update)
    .delete(users.isAuthenticated, notes.isAuthorized, notes.delete);

  app.param('noteId', notes.noteByID);
};
