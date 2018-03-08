import { Component, OnInit } from '@angular/core';

//import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  closeResult: string;

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data:{'':''}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.closeResult = result;
      console.log(this.closeResult);
    });
   
    /* this.modalService.open(ModalComponent).result.then((result)=> {
      this.closeResult = `Closed with: ${result}`;
    }, (reason)=> {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any):string {
    if(reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    }else if(reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    }else{
      return `with: ${reason}`;
    }*/
  }

  
}
