import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(private _http: HttpClient) { }

  obtener():Observable<any>{
    let params = new HttpHeaders().set('Content-type','application/json');
    return this._http.get('http://localhost:3001/report',{headers:params});
  }

  ingresar(user):Observable<any>{
    let parametros = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-type','application/json');
    return this._http.post('http://localhost:3001/report',parametros,{headers:headers});
  }
}
