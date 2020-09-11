import db from "../../database/connection";

class ListClasses {
  week_day: string;
  subject: string;
  time: string;

  constructor(week_day: string, subject: string, time: string) {
    if(!week_day || !subject || !time) {
      throw Error("Invalid filters");
    }
    this.week_day = week_day;
    this.subject = subject;
    this.time = time;
  }


  async listQuery(timeInMinutes: number) {
    const day = Number(this.week_day);
    const classes = await db('classes')
            .whereExists(function() {
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                    .whereRaw('`class_schedule`.`week_day` = ??', [day])
                    .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                    .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
            })
            .where('classes.subject', '=', this.subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);
    
    return classes;
  }
}

export default ListClasses;