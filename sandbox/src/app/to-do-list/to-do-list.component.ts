import { Component, OnInit } from '@angular/core';

export interface TodoList {
    checked: boolean
    value: string
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

    title: string = 'To Do List';
    todoList: TodoList;

    constructor() { }

    ngOnInit(): void {
    }

}
