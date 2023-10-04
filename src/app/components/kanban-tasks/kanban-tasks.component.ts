import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ITask, LEVELS } from 'src/app/models/task.interface';

@Component({
  selector: 'app-kanban-tasks',
  templateUrl: './kanban-tasks.component.html',
  styleUrls: ['./kanban-tasks.component.scss'],
})
export class KanbanTasksComponent {
  todoTasks: ITask[] = [
    {
      title: 'Aprender typescript',
      description: 'Aprender typescript',
      completed: false,
      level: LEVELS.URGENT,
    },
    {
      title: 'Aprender angular',
      description: 'Aprender angular',
      completed: false,
      level: LEVELS.INFO,
    },
    {
      title: 'Aprender nodejs',
      description: 'Aprender nodejs',
      completed: false,
      level: LEVELS.BLOCKING,
    },
    {
      title: 'Aprender mongodb',
      description: 'Aprender mongodb',
      completed: false,
      level: LEVELS.INFO,
    },
    {
      title: 'Aprender javascript',
      description: 'Aprender javascript',
      completed: false,
      level: LEVELS.URGENT,
    },
  ];

  doneTasks: ITask[] = [
    {
      title: 'Aprender html',
      description: 'Aprender html',
      completed: true,
      level: LEVELS.INFO,
    },
    {
      title: 'Aprender css',
      description: 'Aprender css',
      completed: true,
      level: LEVELS.INFO,
    },
    {
      title: 'Aprender sass',
      description: 'Aprender sass',
      completed: true,
      level: LEVELS.INFO,
    },
    {
      title: 'Aprender less',
      description: 'Aprender less',
      completed: true,
      level: LEVELS.INFO,
    },
    {
      title: 'Aprender stylus',
      description: 'Aprender stylus',
      completed: true,
      level: LEVELS.INFO,
    },
  ];

  // todo = [
  //   'Aprender typescript',
  //   'Aprender angular',
  //   'Aprender nodejs',
  //   'Aprender mongodb',
  //   'Aprender javascript',
  // ];

  // done = [
  //   'Aprender html',
  //   'Aprender css',
  //   'Aprender sass',
  //   'Aprender less',
  //   'Aprender stylus',
  // ];

  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
