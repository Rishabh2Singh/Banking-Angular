import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from '../models/register';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registerUrl: string;

  constructor(private http: HttpClient) {
    this.registerUrl = 'http://localhost:8086/newuser';
  }

  public save(register: Register) {
    return this.http.post<Register>(this.registerUrl, register);
  }
}
