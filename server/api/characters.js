const {
    fetchCharacters,
  } = require('../db');
  
  const express = require('express');
  const app = express.Router();
  const { isLoggedIn, isAdmin } = require('./middleware');
  
  app.get('/', async(req, res, next)=> {
    try {
      res.send(await fetchCharacters());
    }
    catch(ex){
      next(ex);
    }
  });
  
  app.put('/characters/:id', isLoggedIn, isAdmin, (req, res, next)=> {
    res.send('hello world');
  });
  
  
  module.exports = app;
  