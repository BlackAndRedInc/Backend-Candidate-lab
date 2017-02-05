exports.render = (req, res) => {
  //Respond with a basic JSON Object for default Route
  res.status(200).json({
    title: 'Black & Red Backend Candidate Lab RESTful API'
  });
};
