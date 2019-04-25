'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx,
    } = this;
    const data = require('../../volume/data.json');
    ctx.body = data;
  }
}

module.exports = HomeController;
