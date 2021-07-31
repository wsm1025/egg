'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { id } = this.ctx.request.query;
    let user;
    if (id === 'all') {
      user = await this.ctx.service.user.findAll('users');
    } else {
      user = await this.ctx.service.user.find(id);
    }
    this.ctx.body = user
  }

  async create() {

  }
  async destroy() {
    const { id } = this.ctx.params;
    const result = await this.ctx.service.user.delData(id);
    if (result.user.affectedRows === 1) {
      this.ctx.body = {
        code: 1,
        msg:"删除成功"
      }
    } else {
      this.ctx.body ={
        code: 0,
        msg:"删除失败"
      }
    }
  }
  async update() {
    const { id } = this.ctx.params;
    const { passWord } = this.ctx.request.body;
    let rows = {
      id,
      pass_word:passWord
    }
    const result = await this.ctx.service.user.updateData(rows);
    if (result.user.affectedRows === 1) {
      this.ctx.body = {
        code: 1,
        msg:"更新成功"
      }
    } else {
      this.ctx.body ={
        code: 0,
        msg:"更新失败"
      }
    }
  }

}

module.exports = UserController;
