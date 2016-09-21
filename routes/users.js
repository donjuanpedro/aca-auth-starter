const express = require('express');
const router = express.Router();
const middleware = require('./middleware');

/* GET users listing. */
router.get('/', middleware.auth, function(req, res, next) {
  userModel.findOne({ _id: req.user.id }, function(err, user) {
    return res.json(user);
  })
});

module.exports = router;
