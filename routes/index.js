var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin', function(req, res, next) {
  res.render('adgu');
});

router.get('/loadmore', function(req, res, next) {
  res.render('loadmore');
});

router.get('/eject', function(req, res, next) {
  res.render('eject');
});

router.get('/onreq', function(req, res, next) {
  res.render('onrequest');
});

router.get('/getroomdata/:roomid/:userid/:type', function (req, res, next) {
    req.session.roomid = req.params.roomid;
    req.session.userid = req.params.userid;
    req.session.type = req.params.type;
    res.redirect('/room/' + req.params.roomid);
});

router.get('/room/:id', function(req, res, next) {

  if(req.session.roomid)
  {
    res.render('entire', {roomid: req.session.roomid, userid: req.session.userid, type: req.session.type});
    req.session.destroy();
  }
  else
  {
      res.redirect('/');
  }

});

module.exports = router;