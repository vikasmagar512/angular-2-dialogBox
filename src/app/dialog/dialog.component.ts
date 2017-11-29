import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  close= new EventEmitter();
  constructor() { }
  closeDialog() {
    this.close.emit('event');
  }
}
