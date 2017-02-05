const users = require('../../app/controllers/users.server.controller');
const notes = require('../../app/controllers/notes.server.controller');
const auth = require('../../app/controllers/auth.server.controller')

module.exports = (app) => {
  // add routes to post and list notes - list for development only
  app.route('/notes')
    .post(auth.isAuthenticated, notes.create)
    .get(auth.isAuthenticated, notes.list);

  // add routes to get, update, delete notes by noteID
  app.route('/notes/:noteId')
    .get(auth.isAuthenticated, notes.isAuthorized, notes.read)
    .put(auth.isAuthenticated, notes.isAuthorized, notes.update)
    .delete(auth.isAuthenticated, notes.isAuthorized, notes.delete);

  app.param('noteId', notes.noteByID);
};
