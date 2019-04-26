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
  config.keys = appInfo.name + '_1556181936148_643';

  config.middleware = [];

  const userConfig = {
    mysql: {
      client: {
        host: process.env.EGG_MYSQL_SERVER_PORT_3306_TCP_ADDR || '127.0.0.1',
        port: process.env.EGG_MYSQL_SERVER_PORT_3306_TCP_PORT || '3306',
        user: 'root',
        password: process.env.EGG_MYSQL_SERVER_ENV_MYSQL_ROOT_PASSWORD || 'root',
        database: process.env.EGG_MYSQL_SERVER_ENV_MYSQL_DATABASE || 'neo',
      },
      app: true,
      agent: false,
    },
  };

  console.log(process.env.EGG_MYSQL_SERVER_PORT_3306_TCP_ADDR, process.env.EGG_MYSQL_SERVER_PORT_3306_TCP_PORT);

  return {
    ...config,
    ...userConfig,
  };
};
