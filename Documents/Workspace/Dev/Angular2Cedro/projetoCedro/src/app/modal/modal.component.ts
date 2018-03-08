import { Component, OnInit, Inject } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { MatDialogRef, MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  marcado: boolean; 

  constructor(private dialogRef: MatDialogRef<ModalComponent>) { }

  ngOnInit() {
  }

  onNoClick(){
    this.dialogRef.close('Fechei com cancelar');
  }

  onSubmit(){
    this.dialogRef.close('Fechei com submit');
  }

  buttonState(){
    return ! this.marcado;
  }


}
