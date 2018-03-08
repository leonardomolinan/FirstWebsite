import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

import { RestauranteService } from './restaurante.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  @Input() data: Array<{
    id: number,
    name: string,
    pratos: Array<any>
  }>;

  restaurante: string;

  constructor(
    private _service: RestauranteService
  ) {}

  ngOnInit() {
    this.popularTab();
  }

  popularTab() {
    this._service.getRestaurantes()
      .subscribe(
        successResponse => { this.data = successResponse;
      }, () => console.log('Request Completed'));
      this.data = (this.data);
  }
  onClickRemove(id) {
    this._service.delRestaurante(id);
    const index = this.data.indexOf(id, 0);
    if (index > -1) {
        this.data.splice(index, 1);
    }
    this.popularTab();
  }

}
