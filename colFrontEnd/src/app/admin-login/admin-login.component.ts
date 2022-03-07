import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserregService } from '../Service/userreg.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {



  val: any = "password";
  eye: any = "fa fa-eye-slash"

  toggle() {
    if (this.val === "password") {
      this.val = "text"
      this.eye = "fa fa-eye"

    } else {
      this.val = "password"
      this.eye = "fa fa-eye-slash"
    }
  }

  loginForm: FormGroup;

  constructor(private router: Router, private adminservice: UserregService) { }
  result: any
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      checked: new FormControl('', [Validators.required, Validators.requiredTrue])

    })

  }

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }
  get checked() {
    return this.loginForm.get('checked')
  }

  onLogin() {
    console.log(this.loginForm.value)
    this.adminservice.logData(this.loginForm.value).subscribe((data) => {
      console.log(this.result = data)
      localStorage.setItem("role", this.result.data.role)
      localStorage.setItem("token", this.result.data.token)
      if (this.result.data.role === 'admin') {
        this.router.navigate(["details"])
      } else {
        this.router.navigate(["userpage"])

      }

    })


  }
}