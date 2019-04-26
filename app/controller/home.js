'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx,
      app,
    } = this;
    const data = require('../../volume/data.json');
    const mysql_result = await app.mysql.query('SELECT 1+1 AS result');
    ctx.body = { mysql_result, data };
  }
}

module.exports = HomeController;
