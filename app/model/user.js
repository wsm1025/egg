'use strict';
module.exports = app => {
  const { STRING } = app.Sequelize;
  const User = app.model.define('user', {
    userName: STRING,
    passWord: STRING,
  });
  return User;
};
