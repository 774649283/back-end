/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');
// inject environment variables by dotenv
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: path.join(__dirname, '..', '.env.local'),
  });
} else {
  require('dotenv').config();
}

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  const isLocal = appInfo.env === 'local';
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    env: 'prod', // 推荐云函数的 egg 运行环境变量修改为 prod
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1630588887_8688';

  // add your middleware config here]
  config.middleware = [
    'error', // 中间件error
  ];
  config.error = {
    enable: true, // error中间件全局打印请求
  };

  // add your user config here
  const userConfig = {
    // TODO: should change to deploy url.
    deployUrl: isLocal ? 'http://127.0.0.1:7001/' : 'https://service-f1bhmhk4-1251556596.gz.apigw.tencentcs.com/release/',
    authRedirectUrl: isLocal || 'http://localhost:9528/#/login',
    // myAppName: 'egg',
    sequelize: {
      sync: true, // whether sync when app init
      dialect: 'mysql',
      host: '127.0.0.1',
      port: '3306',
      database: 'test_user',
      username: 'root',
      password: 'root',
    },
    security: {
      csrf: {
        enable: false,
      },
    },
    cors: {
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
