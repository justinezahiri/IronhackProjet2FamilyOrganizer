const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const Tribe   = require('../models/Tribe');
const Task   = require('../models/Task');

router.get('/task', (req, res, next) => {
  Task.find()
  .populate("assignedTo")
  .then((myCreatedTasks) => {
    res.locals.ArrayOfCreatedTasks = myCreatedTasks;
    res.render("task/index", { task });

  })
  // .populate("task")
  //   .then(task => {
  //     res.render("task/index", { task });
  //   })
  //   .catch(error => {
  //     res.render("index");
  //   })
})

router.get('/task/new', (req, res, next) => {
  Tribe.findOne({members:req.user._id}).populate("members")
  .then(tribe => {
    console.log(tribe);
    res.render("task/new", {
      tribe
    })
  })
})

router.post('/task/new', (req, res, next) => {
  const { task, description, assignedTo, createdBy, date, status} = req.body;

  // const task = req.body.task;
  // const description = req.body.description;
  // const assignedTo = req.body.assignedTo;
  
  const newTask = new Task({
    task: task,
    description: description,
    assignedTo: assignedTo,
    createdBy : createdBy,
    date : date,
    status : status
  })
  newTask.save()
  .then(task => {
    res.redirect('/task')
  })
  .catch((error) => {
    console.log(error)
  })
});


router.post('/task/:id/delete', (req, res, next) => {
  let taskId = req.params.id;
  Task.findByIdAndRemove({'_id': taskId})
  .then(task => {
    res.redirect('/task')
  })
  .catch((error) => {
    console.log(error)
  })
});

router.get('/task/:id/edit', (req, res, next) => {
  let taskId = req.params.id;
  task.findOne({'_id': taskId})
    .then(task => {
      res.render("task/edit", { task })
    })
    .catch(error => {
      console.log(error)
    })
});

router.post('/task/:id/edit', (req, res, next) => {
   let taskId = req.params.id;
   const { name, occupation, catchPhrase } = req.body;
  task.update({'_id': taskId},{ $set: { name, occupation, catchPhrase } })
    .then(task => {
      res.redirect('/task')
    })
     .catch(error => {
       console.log(error)
     })
 });

 router.get('/task', (req, res, next) => {  //pour afficher le detail par celebrity dans show.hbs
  let userId = req.params.id;
  User.findOne({_id: userId}) //attention syntaxe
    .populate ('task')
    .then(user => {
      res.render("/task/index", { user }) //attention syntaxe , ici jaune = url et celeb = info bdd
    })
    .catch(error => {
      console.log(error)
    })
});


//  User.
//   findOne().
//   populate({ name: 'Val' }
//     path: 'task',
//   });

 module.exports = router;

