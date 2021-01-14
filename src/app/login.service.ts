import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payee } from './add-payee/add-payee.component';
import { Login } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(login:Login):Observable<any>{
    let url=("http://localhost:8086/login");
    return this.http.post(url,login);
  }
  check(message:string):Observable<any>{
    let url=("http://localhost:8086/testing");
    return this.http.post(url,message);
  }
  
}
