var express = require('express');
var router = express.Router();

router.get('/:yyyymmdd', function(req, res, next) {
  console.log(JSON.stringify(req.params));
  if (!/^(\d){8}$/.test(req.params.yyyymmdd)) {
    res.send({'error': 'send yyyymmdd'});
    return;
  }
  const y = req.params.yyyymmdd.substr(0,4),
        m = req.params.yyyymmdd.substr(4,2) - 1,
        d = req.params.yyyymmdd.substr(6,2);
  const date = new Date(y, m, d);

  const week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  res.send(JSON.stringify({'weekday': week[date.getDay()]}));
});

module.exports = router;
