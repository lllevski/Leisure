const express = require('express');
const router = express.Router();

module.exports = function(app) {
  app.use('/', router);
};

router.get('/', function(req, res, next) {
  // ENTRY POINT
  console.log(req.params);
  console.log('asdsadklsadjkl;fsdhjsfdjl;kfskjlfsdkdsjffsd;ljk');

  res.render('index', {
    title: 'Generator-Express MVC',
  });
});


// api/users
// api/asd
