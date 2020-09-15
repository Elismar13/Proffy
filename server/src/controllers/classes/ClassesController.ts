import { Request, Response } from 'express';

import db from '../../database/connection';
import convertHourToMinutes from '../../utils/convertHourToMinutes';
import ListClasses from './ListClasses';

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string,
}

export default class ClassesControllers {
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