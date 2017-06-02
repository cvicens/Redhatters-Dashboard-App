import { Assignee } from './assignee';

export class FormOrder {
  constructor(
    public id: string,
    public title: string,
    public assignee: Assignee
  ) {  }
}