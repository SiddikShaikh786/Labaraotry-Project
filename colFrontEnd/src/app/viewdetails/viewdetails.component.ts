import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserregService } from '../Service/userreg.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  gluco: any;
  haemo: any = []
  data1: any;

  constructor(private service: UserregService, private route: Router, private rout: ActivatedRoute) { }

  result: any
  ngOnInit() {

    this.service.fetchSample().subscribe((data) => {
      this.result = data
      console.log("All details :-", this.result.data);
      this.haemo = this.result.data[0].haemotology
      this.gluco = this.result.data[0].glucometry

      console.log(this.haemo);
      console.log(this.gluco);





    })

  }

}
