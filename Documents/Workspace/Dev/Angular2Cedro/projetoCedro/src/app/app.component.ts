import { Component, TemplateRef } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
//import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  closeResult: string;

  constructor() {}

}
