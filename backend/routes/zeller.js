var express = require('express');
var router = express.Router();

router.get('/:yyyymmdd', function(req, res, next) {
  console.log(JSON.stringify(req.params));
  if (!/^(\d){8}$/.test(req.params.yyyymmdd)) {
    res.send({'error': 'send yyyymmdd'});
    return;
  }
  var y = parseInt(req.params.yyyymmdd.substr(0,4)),
      m = parseInt(req.params.yyyymmdd.substr(4,2)),
      d = parseInt(req.params.yyyymmdd.substr(6,2));

  if (m < 3) {
    y = y - 1;
    m = m + 12;
  }

  const h = (y + parseInt(y / 4) - parseInt(y / 100) + parseInt(y / 400) + parseInt((13 * m + 8) / 5) + d) % 7;

  const week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  res.send(JSON.stringify({'zeller': week[h]}));
});

module.exports = router;
