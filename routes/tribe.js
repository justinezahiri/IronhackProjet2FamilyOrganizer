const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const Tribe   = require('../models/Tribe');

// GET tribe page 
router.get('/tribe', (req, res, next) => {
  res.render('tribe');
});

 
router.post('/createTribe', (req, res, next) => { 
  const { name } = req.body;
  const { membername } = req.body; //tableau de noms 
  //TODO: lier la famille au User 

  //TODO: parcourir membername et créer new users. 1.créer autant de users qu'il y a de membername 2.grâce à tous les users dont on a récupéré l'ID créer
  // une nouvelle tribe avec tous les users. 
  let promises = [];

  membername.forEach(function(name) {
    promises.push(new User({
      username: name,
      password: "changeme"
    }).save());
  });

  Promise.all(promises).then(function(users){
    // 
    console.log(users);
    const newTribe = new Tribe({
      name: name,
      members: users
    }).save()
      .catch((error) => {
        console.log(error);
        next(error);
      })
      .then(function (tribe) {
        res.send('save tribe ok')
        //res.redirect('/tribe');
      });
  });
  
  // const newTribe = new Tribe ({ name, membername })
  // newTribe.save()
  // .then((tribe) => {
  //   res.redirect('/tribe');
  // })
  // .catch((error) => {
  //   console.log(error);
  // })
});

module.exports = router;
