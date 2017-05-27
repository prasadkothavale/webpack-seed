var express = require('express');
var router = express.Router();

/* GET service status */
router.get('/', function(req, res, next) {
  res.send('Service is live');
});

module.exports = router;
