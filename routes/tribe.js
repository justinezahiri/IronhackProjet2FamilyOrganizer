const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const Tribe         = require('../models/Tribe');

// GET tribe page 
router.get('/tribe', (req, res, next) => {
  res.render('tribe');
});

//TODO: changer members par emails + envoyer un email d'invitation 
router.post('/createTribe', (req, res, next) => { 
  const { name } = req.body;
  //TODO: lier la famille au User 
  // console.log('members===', members);
  
  const newTribe = new Tribe ({ name, members })
  newTribe.save()
  .then((tribe) => {
    res.redirect('/tribe');
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;
