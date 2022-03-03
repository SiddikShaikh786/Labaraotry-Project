import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserregService } from '../Service/userreg.service';



@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  value: any
  regForm: FormGroup;
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

  constructor(private service: UserregService, private route: Router) { }
  result: any
  ngOnInit() {
    this.regForm = new FormGroup({
      uname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      role: new FormControl('', [Validators.required])
    })

  }
  get uname() {
    return this.regForm.get('uname');
  }
  get email() {

    return this.regForm.get('email');
  }

  get password() {
    return this.regForm.get('password');
  }


  get role() {
    return this.regForm.get('role');
  }
  onRegForm() {
    console.log(this.regForm.value);
    this.service.regData(this.regForm.value).subscribe((res) => {
      // this.result = res
      // console.log(this.result)
      console.log(res);

    })

  }
}
