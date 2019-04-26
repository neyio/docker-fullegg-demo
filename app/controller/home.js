'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx,
      app,
    } = this;
    const local_result = require('../../volume/data.json');
    const mysql_result = await app.mysql.query('SELECT 1+1 AS result');
    const redis_result = await app.redis.get('helloworld') || 1;
    app.redis.set('helloworld', parseInt(redis_result) + 1, 'EX', 100);
    ctx.body = { mysql_result, redis_result, local_result };
  }
}

module.exports = HomeController;
