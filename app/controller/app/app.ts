import { Controller } from 'egg';
import * as Model from '../../mocks/article/list';
export default class AppController extends Controller {
  async index() {
    await this.ctx.render('app/app.js', {
      url: this.ctx.url.replace(/\/app/, '')
    });
  }

  async list() {
    const pageIndex = this.ctx.query.pageIndex;
    const pageSize = this.ctx.query.pageSize;
    this.ctx.body = Model.getPage(pageIndex, pageSize);
  }

  async detail() {
    const id = this.ctx.params.id;
    this.ctx.body = Model.getDetail(id);
  }
}