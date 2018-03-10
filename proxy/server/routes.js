const router = require('express').Router();

router.get('/compare', (req, res) => {
  request('http://compare:3004/compare', { qs: req.query }).pipe(res);
});

router.get('/load', (req, res) => {
  request('http://expanded:3005/load').pipe(res);
});

router.get('/description', (req, res) => {
  request('http://description:3001/description').pipe(res);
});

router.get('/feedback', (req, res) => {
  request('http://feedback:3002/feedback').pipe(res);
});

router.get('/courses', (req, res) => {
  request('http://payment:3003/courses').pipe(res);
});

module.exports = router;
