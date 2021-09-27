const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'));

//Function to handle try and catch for every async route. Without this function, you'll have to always try and catch error in all your callback routes definition, just like in NOTE:1 below
function asyncHandler(cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch(err) {
      res.render('error', {error: err});
    }
  }
}

//CALL BACKS
// function getUsers(cb){
//   fs.readFile('data.json', 'utf8', (err, data) => {
//     if (err) return cb(err);
//     const users = JSON.parse(data);
//     return cb(null, users);
//   });
// }

//PROMISES
function getUsers() {
  return new Promise((resolve, reject) => {
    fs.readFile('data.json', 'utf-8', (err, data) => {
      if(err) {
        reject(err);
      } else {
        const users = JSON.parse(data);
        resolve(users);
      }
    });
  });
}

// Over time, we can have many .then() declaration in our callback that it would be difficult to maintain. We have another javaScript callback method call async. Check out the implementation of below code using async approach in NOTE:1

// app.get('/', (req, res) => {
//   getUsers()
//   .then((users) => {
//     res.render('index', {title: "Users", users: users.users});
//   })
//   .catch((err) => {
//     res.render('error', {error:err});
//   });
// });


// NOTE:1
// app.get('/', async (req, res) => {
//   try {
//     const users = await getUsers();
//     res.render('index', {title: "Users", users: users.users});
//   } catch(err) {
//     res.render('error', {error: err});
//   }
// });

//You can write a function to handle error for all your async. In this way, we don't need to keep repeating the try and catch block in all our routes. The above async would become:
//ASYNC/AWAIT
app.get('/', asyncHandler(async (req, res) => {
  const users = await getUsers();
  //throw new Error('Erroooooor');
  res.render('index', {title: "Users", users: users.users});
}));



app.listen(3000, () => console.log('App listening on port 3000!'));