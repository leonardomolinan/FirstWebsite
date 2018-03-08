import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-add-restaurante',
  templateUrl: './add-restaurante.component.html',
  styleUrls: ['./add-restaurante.component.css']
})
export class AddRestauranteComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private _service: RestauranteService,
    private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formulario = this._formBuilder.group({
      name: [null]
    });

  }

  onSubmit() {
    if (this.formulario.valid) {
      // this._service.addRestaurante(this.formulario).subscribe();
      let promise = this._service.addRestaurante(this.formulario);
      promise.then(response => this.onClickSuccess(response));
    } else {
      console.log('formulario invalido');
    }
  }

  onClickSuccess(response: string) {
    console.log(response);
  }

}
