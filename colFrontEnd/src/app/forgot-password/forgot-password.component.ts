import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserregService } from '../Service/userreg.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private service: UserregService, private router: Router) {}

  forgotForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  get email() {
    return this.forgotForm.get('email');
  }
  get password() {
    if (this.password.value !== 0) {
      return this.forgotForm.get('password');
    }
  }

  forgotPassword() {
    // console.log(this.forgotForm.value)
    // alert('password reset successfully');
    this.service.logData(this.forgotForm.value).subscribe((data) => {
      console.log(data);
    });
    alert('password reset successfully');
    this.router.navigate(['adminLogin']);
  }

  checkout(){
    alert('password reset successfully');
  }
  ngOnInit(): void {}
}
