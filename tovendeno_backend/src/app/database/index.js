const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/user");

const sequelize = new Sequelize(dbConfig);

const jane = User.create({});

jane.init(sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = sequelize;