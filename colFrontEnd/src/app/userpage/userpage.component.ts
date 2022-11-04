import { Component, OnInit } from '@angular/core';
import { UserregService } from '../Service/userreg.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css'],
})
export class UserpageComponent implements OnInit {
  username: any
  name: any 
  showname:any
  constructor(private regservice: UserregService) {}
  getuser() {
    this.regservice
      .getData()
      .pipe()
      .subscribe((x: any) => {
        this.username = x.data.samples;
        this.name = this.username;
        // if(this.name.role ==='user')
        // { 
        //   this.showname;
        // }
        console.log(this.name);
      });
  }
  ngOnInit(): void {
    this.getuser();
  }
}
