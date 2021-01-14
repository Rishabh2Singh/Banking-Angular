import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Netbank } from '../models/netbank';
import { NetbankService } from '../service/netbank.service';

@Component({
  selector: 'app-netbank',
  templateUrl: './netbank.component.html',
  styleUrls: ['./netbank.component.css']
})
export class NetbankComponent {

  netbank: Netbank;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private netbankService: NetbankService) {
    this.netbank = new Netbank();
  }
 
  onSubmitNet() {
    this.netbankService.save(this.netbank).subscribe(result => this.gotoSuccess());
  }

  gotoSuccess() {
    this.router.navigate(['/successnet']);
  }


}
