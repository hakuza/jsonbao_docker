const router = require('express').Router();
const request = require('request');

router.get('/load', (req, res) => {
  console.log('load');
  request('http://expanded:3005/load').pipe(res);
});

router.get('/description', (req, res) => {
  console.log('description');
  request('http://description:3001/description').pipe(res);
});

router.get('/feedback', (req, res) => {
  console.log('feedback');
  request('http://feedback:3002/feedback').pipe(res);
});

router.get('/courses', (req, res) => {
  console.log('courses');
  request('http://payment:3003/courses').pipe(res);
});

router.get('/compare', (req, res) => {
  console.log('compare');
  request('http://compare:3004/compare', { qs: req.query }).pipe(res);
});
module.exports = router;
