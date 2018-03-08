import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { PratoService } from '../prato.service';

@Component({
  selector: 'app-add-prato',
  templateUrl: './add-prato.component.html',
  styleUrls: ['./add-prato.component.css']
})
export class AddPratoComponent implements OnInit {

  prato: any = {
    restaurante: '',
    nome: '',
    valor: []
  };

  formulario: FormGroup;

  constructor(
    private _service: PratoService,
    private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formulario = this._formBuilder.group({
      name: [null],
      valor: [null]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      // this._service.addRestaurante(this.formulario).subscribe();
      let promise = this._service.addPrato(this.formulario);
      promise.then(response => this.onClickSuccess(response));
    } else {
      console.log('formulario invalido');
    }
  }

  onClickSuccess(response: string) {
    console.log(response);
  }

}
