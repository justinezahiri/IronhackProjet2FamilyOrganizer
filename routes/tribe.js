const express = require('express');
const router  = express.Router();

// GET tribe page 
router.get('/tribe', (req, res, next) => {
  res.render('tribe');
});
router.post('/createTribe', (req, res, next) => { 
  const { name, members } = req.body;
  
  console.log('members===', members);
  
  const tribe = new Tribe ({ name, members})
  tribe.save()
  .then((tribe) => {
    res.redirect('/tribe');
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;
