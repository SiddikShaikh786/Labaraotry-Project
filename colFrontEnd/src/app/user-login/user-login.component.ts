import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserregService } from '../Service/userreg.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  result: any
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
  constructor(private service: UserregService, private route: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),

    })
  }
  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }


  onLogin() {
    {
      console.log(this.loginForm.value)
      this.service.logData(this.loginForm.value).subscribe((data) => {
        // console.log(data)
        console.log(this.result = data)
        if (this.result.data.role === 'user') {
          this.route.navigate(["userpage"])
        }

      })
    }
  }

}
