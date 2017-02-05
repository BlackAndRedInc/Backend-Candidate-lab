const Note = require('mongoose').model('Note');

// endpoint for the /api/notes POST
exports.create = (req, res, next) => {
  const note = new Note(req.body);
  note.creator = req.user;
  note.save((err) => {
    if(err) {
      return next(err);
    } else {
      res.status(200).json({apiResponse:'Note Created'});
    }
  });
};

// endpoint for the /api/notes GET
exports.list = (req, res, next) => {
  Note.find({
    creator: req.user.id,
    deleted: false
  }).sort('-created').exec((err, notes) => {
    if(err) {
      return next(err);
    }else{
      res.status(200).json(notes);
    }
  });
};

// endpoint for the /api/notes/:noteID GET
exports.read = (req, res) => {
  res.json(req.note);
};

// endpoint for the /api/notes/:noteID PUT
exports.update = (req, res, next) => {
  Note.findByIdAndUpdate(req.note.id, req.body, {
      'new': true
    }, (err, note) => {
    if(err) {
      return next(err);
    } else {
      res.status(200).json({apiResponse:'Note Updated'});
    }
  });
};

// endpoint for the /api/notes/:noteID DELETE
exports.delete = (req, res, next) => {
  Note.findByIdAndUpdate(req.note.id, {deleted: true}, {
      'new': true
    }, (err, note) => {
    if(err) {
      return next(err);
    } else {
        res.status(200).json({apiResponse:'Note Deleted'});
    }
    next();
  });
};

// endpoint for the /api/notes/:noteID parameter query
exports.noteByID = (req, res, next, id) => {
  Note.findOne({
    _id: id,
    deleted: false
    }, (err, note) => {
    if(err) {
      return next(err);
    } else {
      if (note) {
        req.note = note;
      } else {
        res.status(200).json({apiResponse:'Note Not Found'});
        return;
      };
      next();
    }
  });
};

exports.isAuthorized = (req, res, next) => {
    if (!req.note.creator.equals(req.user.id)) {
        return res.status(403).json({apiResponse:'User Is Not Authorized'});
    };
    next();
};
