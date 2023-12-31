// Create web server
var express = require('express');
var router = express.Router();
var db = require('../models');

// GET /comments
router.get('/', function(req, res) {
  db.Comment.findAll()
  .then(function(comments) {
    res.render('comments/index', { comments: comments });
  })
  .catch(function(error) {
    res.status(400).render('main/404');
  });
});

// POST /comments
router.post('/', function(req, res) {
  db.Comment.create({
    name: req.body.name,
    content: req.body.content
  })
  .then(function(comment) {
    res.redirect('/comments');
  })
  .catch(function(error) {
    res.status(400).render('main/404');
  });
});

// GET /comments/new
router.get('/new', function(req, res) {
  res.render('comments/new');
});

// GET /comments/:id
router.get('/:id', function(req, res) {
  db.Comment.findById(req.params.id)
  .then(function(comment) {
    res.render('comments/show', { comment: comment });
  })
  .catch(function(error) {
    res.status(400).render('main/404');
  });
});

// DELETE /comments/:id
router.delete('/:id', function(req, res) {
  db.Comment.findById(req.params.id)
  .then(function(comment) {
    return comment.destroy();
  })
  .then(function() {
    res.redirect('/comments');
  })
  .catch(function(error) {
    res.status(400).render('main/404');
  });
});

// GET /comments/:id/edit
router.get('/:id/edit', function(req, res) {
  db.Comment.findById(req.params.id)
  .then(function(comment) {
    res.render('comments/edit', { comment: comment });
  })
  .catch(function(error) {
    res.status(400).render('main/404');
  });
});

// PUT /comments/:id
router.put('/:id', function(req, res) {
  db.Comment.findById(req.params.id)
  .then(function(comment) {
    comment.name = req.body.name;
    comment.content = req.body.content;

    comment.save()
    .then(function() {
      res.redirect('/comments');
    })
    .catch(function(error) {
      res.status(400).render('main/404');
    });
  })
  .catch(function(error) {
    res.status(400).

