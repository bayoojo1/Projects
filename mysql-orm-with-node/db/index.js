const Sequelize = require('sequelize');

const sequelize = new Sequelize('delivery', 'root', 'wifi1234', {
host: 'localhost',
dialect: 'mysql'
});

const db = {
  sequelize,
  Sequelize,
  models: {},
};

db.models.User = require('./models/users.js')(sequelize);
//db.models.Person = require('./models/person.js')(sequelize);

module.exports = db;
