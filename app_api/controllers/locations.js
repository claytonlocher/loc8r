
'use strict';

var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.locationsListByDistance = function(req, res) {
  sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.locationsCreate = function(req, res) {
  sendJsonResponse(res, 200, {"status": "success"});
};

// Caffe Bene _id = 56b8ff72a084d24a862e327b

module.exports.locationsReadOne = function(req, res) {
  if (req.params && req.params.locationid) {
    Loc
      .findById(req.params.locationid)
      .exec(function(err, location) {
        if (!location) {
          sendJsonResponse(res, 404, {
            "message": "locationid not found"
          });
          return;
        } else if (err) {
          sendJsonResponse(res, 404, err);
          return;
        }
        sendJsonResponse(res, 200, location);
      });
  } else {
    sendJsonResponse(res, 404, {
      "message": "No locationid in request"
    });
  }
};

module.exports.locationsUpdateOne = function(req, res) {
  sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.locationsDeleteOne = function(req, res) {
  sendJsonResponse(res, 200, {"status": "success"});
};
