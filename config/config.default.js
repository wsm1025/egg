/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1627570829762_4306';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  config.jwt = {
    secret: 'wsm',
  };
  config.sequelize = {
    dialect: 'mysql',
    database: 'root',
    host: '47.118.56.119',
    port: 3306,
    username: 'root',
    password: 'w980703',
    timezone: '+08:00',
  }
  return {
    ...config,
    ...userConfig,
  };
};
