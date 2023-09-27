import { Pipe, PipeTransform } from '@angular/core';
import { IRandomContact } from '../models/randomuser';

@Pipe({
  name: 'completedName'
})
export class CompletedNamePipe implements PipeTransform {

  transform(contact: IRandomContact, ...args: unknown[]): string {
    return `${contact.name.first} ${contact.name.last}`;
  }

}
