'use strict';
module.exports = app => {
  app.beforeStart(async () => {
    // sync根据具模型创建表
    await app.module.sync({});
  });
};
