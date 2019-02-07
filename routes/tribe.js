const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const Tribe         = require('../models/Tribe');

// GET tribe page 
router.get('/tribe', (req, res, next) => {
  res.render('tribe');
});
router.post('/createTribe', (req, res, next) => { 
  const { name, members } = req.body;
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
