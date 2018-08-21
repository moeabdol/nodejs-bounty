const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('pages/home');
});

router.get('/leaderboard', (req, res) => {
  res.render('pages/leaderboard', { leaderboard: true });
});

router.get('/tasks', (req, res) => {
  res.render('pages/tasks', { tasks: true });
});

module.exports = router;
