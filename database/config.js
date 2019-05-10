module.exports = {
  development: {
    username: process.env.MYSQL_USER || '',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || '',
    host: process.env.MYSQL_HOST || '',
    dialect: process.env.MYSQL_DIALECT || '',
    dialectOptions: {
      timezone: process.env.MYSQL_TIMEZONE
    }
  },
  production: {
    username: process.env.MYSQL_USER || '',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || '',
    host: process.env.MYSQL_HOST || '',
    dialect: process.env.MYSQL_DIALECT || '',
    dialectOptions: {
      timezone: process.env.MYSQL_TIMEZONE
    }
  }
};
