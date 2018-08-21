const DB = {
  host:      'localhost',
  port:      5432,
  database:  'nodejs_bounty',
  username:  'moeabdol',
  password:  ''
};

const DATABASE_URI = process.env.DATABASE_URI ||
  `postgres://${DB.username}:${DB.password}@${DB.host}:${DB.port}/${DB.database}`;

const APP_PORT = process.env.PORT || 3000;

const CONFIG = {
  DATABASE_URI,
  APP_PORT
};

module.exports = CONFIG;
