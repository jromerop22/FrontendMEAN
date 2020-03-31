import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private _http : HttpClient) { }

  obtener():Observable<any>{
    let params = new HttpHeaders().set('Content-type','application/json');
    return this._http.get('https://jsonplaceholder.typicode.com/users',{headers:params});
  }
}
