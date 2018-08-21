const router = require('express').Router();
const db     = require('../database');

router.get('/', (req, res) => {
  res.render('pages/home');
});

router.get('/leaderboard', (req, res) => {
  res.render('pages/leaderboard', { leaderboard: true });
});

router.get('/tasks/show', (req, res) => {
  res.render('pages/tasks/show', { tasks: true });
});

router.get('/tasks/add', (req, res) => {
  res.render('pages/tasks/add', { tasks: true });
});

router.post('/tasks/add', (req, res) => {
  db.Task.create({
    title:        req.body.title,
    description:  req.body.description,
    bounty:       parseInt(req.body.bounty),
    instances:    parseInt(req.body.instances),
    status:       'new'
  }).then(() => res.redirect('/tasks/show'))
    .catch(err => res.status(400).json(err));
});

router.get('/claims/show', (req, res) => {
  res.render('pages/claims/show', { claims: true });
});

router.get('/claims/add', (req, res) => {
  res.render('pages/claims/add', { claims: true });
});

module.exports = router;
