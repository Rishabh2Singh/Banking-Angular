import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  holderid:Int16Array;
  setnum(id:Int16Array)
  {
    this.holderid=id;
  }
  getnum()
  {
    return this.holderid;
  }
}
