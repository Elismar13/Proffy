import { Request, Response } from 'express';

import CreateClasseData from './CreateClasseData';
import ListClasseData from './ListClasseData';

export default class ClassesControllers {
  createClassData: CreateClasseData;
  listClasseData: ListClasseData;

  constructor() {
    this.createClassData = new CreateClasseData();
    this.listClasseData = new ListClasseData();

    this.create = this.create.bind(this);
    this.index = this.index.bind(this);
  }

  async index(request: Request, response: Response) {
    await this.listClasseData.index(request, response);
  }

  async create(request: Request, response: Response) {
    await this.createClassData.save(request, response);
  }
}