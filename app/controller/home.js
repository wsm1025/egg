'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const wsm = {
      name: '汪世民',
    };
    ctx.body = wsm;
  }
}

module.exports = HomeController;
