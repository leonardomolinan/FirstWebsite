import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Http, Response, Headers, RequestOptions} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Prato } from '../models/prato.model';

const API = 'http://localhost:5000/api/Pratos';

@Injectable()
export class PratoService {

  constructor(private _http: Http) { }

  getPratos() {
    return this._http.get(API)
      .map(dados => dados.json());
  }

  addPrato(data): Promise<any> {
    let head = new Headers({ 'Content-Type': 'application/json' });
    let promise = this._http.post(API, JSON.stringify(data.value), { headers: head } ).toPromise()
      .then( function Success(response) {
        return response.json();
      });
        return promise;
  }

  delPrato(data): Promise<any> {
    let head = new Headers({ 'Content-Type': 'application/json' });
    let promise = this._http.delete(API + '/' + data, { headers: head } ).toPromise()
      .then( function Success(response) {
        return response.json();
      });
        return promise;
  }

  uptPrato(data: Prato) { }
}
