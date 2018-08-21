const Sequelize = require('sequelize');

const config = require('../config');

const sequelize = new Sequelize(config.DATABASE_URI);

const User = sequelize.define('user', {
  // id: {
  //   type: Sequelize.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true
  // },
  username: Sequelize.STRING,
});

const Task = sequelize.define('task', {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  bounty: Sequelize.INTEGER,
  instances: Sequelize.INTEGER,
  status: Sequelize.ENUM('new', 'done')
});

const Claim = sequelize.define('claim', {
  status: Sequelize.ENUM('submitted', 'accepted', 'rejected', 'revoked',
    'disputed')
});

Task.belongsTo(User);
User.hasMany(Task);

Claim.belongsTo(User);
User.hasMany(Claim);

Claim.belongsTo(Task);
Task.hasMany(Claim);

sequelize.sync({ logging: true });

module.exports = sequelize;
