export enum LEVELS {
  INFO = 'info',
  URGENT = 'urgent',
  BLOCKING = 'blocking'
}

export interface ITask {
  title: string;
  description: string;
  completed: boolean;
  level: LEVELS;
}


