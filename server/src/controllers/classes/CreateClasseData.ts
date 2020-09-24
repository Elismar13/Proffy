import { Request, Response } from 'express';

import db from '../../database/connection';
import convertHourToMinutes from "../../utils/convertHourToMinutes";

interface ScheduleItem {
  week_day: number,
  from: string,
  to: string,
}

class CreateClasseData {
  async save(request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = request.body;

    const trx = await db.transaction();

    try {
      const insertUsersIds = await trx('users').insert({
          name,
          avatar,
          whatsapp,
          bio,
      });
  
      const user_id = insertUsersIds[0];
      const insertedClassesId = await trx('classes').insert({
          subject,
          cost,
          user_id
      });
  
  
      const class_id = insertedClassesId[0];
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
          return {
              class_id,
              week_day: scheduleItem.week_day,
              from: convertHourToMinutes(scheduleItem.from),
              to: convertHourToMinutes(scheduleItem.to)
          };
      });
  
      await trx('class_schedule').insert(classSchedule);
  
      await trx.commit();
      
      return response.send().status(201);
    } catch(error) {
        console.log(error)
        await trx.rollback();
        
        return response.status(400).send({
            error: 'Unspected error while creating new class'
        })
    }
  }
}

export default CreateClasseData;