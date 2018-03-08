import {  MatDialog, MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { TermoComponent } from '../termo/termo.component';
@Component({
  selector: 'app-info-recebidas',
  templateUrl: './info-recebidas.component.html',
  styleUrls: ['./info-recebidas.component.css']
})
export class InfoRecebidasComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  openTermo(){
    let dialogRef = this.dialog.open(TermoComponent,{
      height:'350px',
      width: '400px'
    })
  }
  
  ngOnInit() {
  }

}
