'use strict';

module.exports = () => { // 中间件test
  return async function(ctx, next) {
    try {
      await next();
      ctx.logger.info('请求URL:', ctx.request.host + ctx.request.url, '参数:', ctx.request.body);
    } catch (err) {
      ctx.logger.error(err);
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      const status = err.status || 500;
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const error = status === 500 && ctx.app.config.env === 'prod'
        ? 'Internal Server Error'
        : err.message;
      // 从 error 对象上读出各个属性，设置到响应中
      ctx.body = { error };
      ctx.status = status;
    }
  };
};
