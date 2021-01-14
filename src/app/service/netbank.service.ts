import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Netbank } from '../models/netbank';

@Injectable({
  providedIn: 'root'
})
export class NetbankService {

  private netbankUrl: string;

  constructor(private http: HttpClient) {
    this.netbankUrl = 'http://localhost:8086/netbanking';
  }

  public save(netbank: Netbank) {
    return this.http.post<Netbank>(this.netbankUrl, netbank);
  }
}
