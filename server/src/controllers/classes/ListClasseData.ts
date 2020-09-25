import { Request, Response } from 'express';

import convertHourToMinutes from '../../utils/convertHourToMinutes';
import ListClasses from './ListClasses';

class ListClasseData {
  async index(request: Request, response: Response) {
    const filters = request.query;

    const week_day = filters.week_day as string;
    const subject = filters.subject as string;
    const time = filters.time as string;

    const timeInMinutes = convertHourToMinutes(time);

    try {
      const indexClasses = new ListClasses(week_day, subject, time);
      const classes = await indexClasses.listQuery(timeInMinutes);
      return response.send(classes);
    } catch (error) {
      console.log(error)
      return  response.status(400).send({
        error: error,
      });
    }
  }
}

export default ListClasseData;