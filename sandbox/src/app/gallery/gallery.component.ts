import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openToDoList() {
    this.dialog.open(ToDoListComponent, {
      maxHeight: '700px',
      width: '600px',
    });

  }

}
