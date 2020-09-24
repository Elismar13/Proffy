import { Request, Response } from 'express';

import convertHourToMinutes from '../../utils/convertHourToMinutes';
import CreateClasseData from './CreateClasseData';
import ListClasses from './ListClasses';

export default class ClassesControllers {
  createClassData: CreateClasseData;

  constructor() {
    this.createClassData = new CreateClasseData();
    this.create = this.create.bind(this);
  }

  async index(request: Request, response: Response) {
    const filters = request.query;

    const week_day = filters.week_day as string;
    const subject = filters.subject as string;
    const time = filters.time as string;

    const timeInMinutes = convertHourToMinutes(time);

    try {
      const indexClasses = new ListClasses(week_day, subject, time);
      const classes = indexClasses.listQuery(timeInMinutes);
      return response.send(classes);
    } catch (error) {
      console.log(error)
      return  response.status(400).send({
          error: error,
      });
    }
  }

  async create(request: Request, response: Response) {
    await this.createClassData.save(request, response);
  }
}