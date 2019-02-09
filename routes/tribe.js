const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const Tribe   = require('../models/Tribe');

// GET tribe page 
router.get('/tribe', (req, res, next) => {
  res.render('tribe');
});

//TODO: envoyer un email d'invitation aux "membres invités" 
router.post('/createTribe', (req, res, next) => { 
  const { name } = req.body;
  const { email } = req.body;
  //TODO: lier la famille au User 

  
  const newTribe = new Tribe ({ name, email })
  newTribe.save()
  .then((tribe) => {
    res.redirect('/tribe');
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;
