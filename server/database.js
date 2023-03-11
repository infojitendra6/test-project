
import Sequelize from 'sequelize';
const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PWD, {
  host: process.env.MYSQL_HOST,
  dialect: process.env.MYSQL_POOL_DIALECT,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: process.env.MYSQL_POOL_ACQUIRE,
    idle: process.env.MYSQL_POOL_IDLE
  }
});
module.exports = sequelize;

