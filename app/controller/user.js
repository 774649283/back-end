'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const { query, service, helper } = ctx;
    const options = {
      limit: helper.parseInt(query.limit),
      offset: helper.parseInt(query.offset),
      attributes: [ 'id', 'name', 'dob', 'address', 'description', 'created_at' ],
    };
    const data = await service.user.list(options);
    ctx.body = {
      code: 0,
      data: {
        count: data.count,
        items: data.rows,
      },
    };
  }

  async show() {
    const { ctx } = this;
    const { params, service, helper } = ctx;
    const id = helper.parseInt(params.id);
    ctx.body = await service.user.find(id);
  }

  async create() {
    const { ctx } = this;
    const { service } = ctx;
    const body = ctx.request.body;
    const user = await service.user.create(body);
    ctx.status = 200;
    ctx.body = user;
  }

  async update() {
    const { ctx } = this;
    const { params, service, helper } = ctx;
    const body = ctx.request.body;
    const id = helper.parseInt(params.id);
    ctx.body = await service.user.update({
      id,
      updates: body,
    });
  }

  async destroy() {
    const { ctx } = this;
    const { params, service, helper } = ctx;
    const id = helper.parseInt(params.id);
    await service.user.destroy(id);
    ctx.status = 200;
  }
}

module.exports = UserController;
