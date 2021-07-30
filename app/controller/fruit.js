'use strict';
const Controller = require('egg').Controller;
const friut = [ '1', '2', '3' ];
class FruitsController extends Controller {
  async index() {
    const a = new Array(10).fill(10);
    const data = {
      a,
    };
    this.ctx.body = data;
  }
  async create() {
    this.ctx.body = 10000;
  }
  //   async getID() {
  //     const index = this.ctx.params.id;
  //     this.ctx.body = index;
  //   }
  async new() {
    this.ctx.body = `
      <form method='post' action="/fruits">
      <input name='fruit'/>
      <button>添加</button>
      </form>
      `;
  }
//   async createFruit() {
//     const fruit = this.ctx.request.body;
//     this.ctx.body = fruit;
//   }
}
module.exports = FruitsController;
