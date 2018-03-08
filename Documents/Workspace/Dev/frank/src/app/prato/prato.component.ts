import { Component, OnInit, Input } from '@angular/core';

import { PratoService } from './prato.service';

@Component({
  selector: 'app-prato',
  templateUrl: './prato.component.html',
  styleUrls: ['./prato.component.css']
})
export class PratoComponent implements  OnInit {

  @Input() data: Array<{
    id: number,
    name: string,
    restaurantes: Array<any>
  }>;

  constructor(private _service: PratoService) { }
  ngOnInit() {
    this.popularTab();
  }

  popularTab() {
    this._service.getPratos()
      .subscribe(
        successResponse => { this.data = successResponse;
      }, () => console.log('Request Completed'));
      this.data = (this.data);
  }
  onClickRemove(id) {
    this._service.delPrato(id);
    const index = this.data.indexOf(id, 0);
    if (index > -1) {
        this.data.splice(index, 1);
    }
    this.popularTab();
  }

}
