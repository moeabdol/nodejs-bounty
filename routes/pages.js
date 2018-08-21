const router = require('express').Router();
const db     = require('../database');

router.get('/', (req, res) => {
  res.render('pages/home');
});

router.get('/leaderboard', (req, res) => {
  res.render('pages/leaderboard', { leaderboardActive: true });
});

router.get('/tasks', (req, res) => {
  db.Task.findAll()
    .then(tasks => {
      res.render('pages/tasks/index', {
        tasksActive: true,
        tasks
      });
    })
    .catch(err => res.status(400).json(err));
});

router.get('/tasks/add', (req, res) => {
  res.render('pages/tasks/add', { tasksActive: true });
});

router.post('/tasks/add', (req, res) => {
  db.Task.create({
    title:        req.body.title,
    description:  req.body.description,
    bounty:       parseInt(req.body.bounty),
    instances:    parseInt(req.body.instances),
    status:       'new'
  }).then(() => res.redirect('/tasks'))
    .catch(err => res.status(400).json(err));
});

router.get('/claims', (req, res) => {
  res.render('pages/claims/index', { claimsActive: true });
});

router.get('/claims/add', (req, res) => {
  res.render('pages/claims/add', { claimsActive: true });
});

module.exports = router;
