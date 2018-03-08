import { Component } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './Modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  closeResult: string;

  constructor(public dialog: MatDialog) {}

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '60%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.closeResult = result;
    });
    console.log(this.closeResult);
  }
}
