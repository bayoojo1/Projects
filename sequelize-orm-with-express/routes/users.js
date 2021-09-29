const express = require('express');
const router = express.Router();
const User = require('../models').User;

/* Handler function to wrap each route. */
function asyncHandler(cb){
    return async(req, res, next) => {
      try {
        await cb(req, res, next)
      } catch(error){
        // Forward error to the global error handler
        next(error);
      }
    }
  }

router.get('/user', asyncHandler(async (req, res) => {
    const users = await User.findAll();
    if(users) {
      res.render('users/index', { users, username: users.username });
    } else {
      res.sendStatus(404);
    }
    
}));


module.exports = router;