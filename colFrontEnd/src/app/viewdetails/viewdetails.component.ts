import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserregService } from '../Service/userreg.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  gluco: any;
  haemo: any;
  data1: any;
  constructor(private service: UserregService, private route: Router) { }

  result: any
  ngOnInit() {
    this.service.fetchSample().subscribe((data) => {
      console.log(data)
      this.result = data
      console.log(this.result.data);
      this.haemo = this.result.data[0].haemotology
      this.gluco = this.result.data[0].glucometry

      console.log(this.haemo);
      console.log(this.gluco);



      // this.data1 = res.data
      // console.log(this.data1)
      // this.gluco = this.data1.date
      // console.log(this.gluco)


      // console.log(this.result.data[0].haemotology)

    })
    // this.route.navigate['viewdetails']

  }

}
