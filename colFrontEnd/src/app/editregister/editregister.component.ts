import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserregService } from '../Service/userreg.service';

@Component({
  selector: 'app-editregister',
  templateUrl: './editregister.component.html',
  styleUrls: ['./editregister.component.css']
})
export class EditregisterComponent implements OnInit {
  constructor(private rout: ActivatedRoute, private servs: UserregService, private router: Router) { }

  result: any
  SelectedUser: any
  val: any
  ngOnInit() {

    let id = this.rout.snapshot.params._id
    console.log(id);
    this.servs.getData().subscribe((data) => {
      this.result = data
      this.result = this.result.data.samples
      // console.log(this.result.data.samples);

      for (let res of this.result) {
        if (res._id === id) {
          this.SelectedUser = res
          console.log(this.SelectedUser.uname);

        }
      }
    })
  }
  getUser(form: NgForm) {
    console.log(form.value);

    let { uname, email } = form.value


    this.servs.editData({ _id: this.SelectedUser._id, uname: uname, email: email }).subscribe((res) => {
      console.log(" edited successfully", res);
    })
    this.router.navigate(["details"])
  }

}
