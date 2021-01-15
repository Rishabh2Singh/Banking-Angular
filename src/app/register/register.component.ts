import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../service/register.service';
import { Register } from '../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  register: Register;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private registerService: RegisterService) {
    this.register = new Register();
  }
 
  onSubmit() {
    this.registerService.save(this.register).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/successreg']);
  }

}
