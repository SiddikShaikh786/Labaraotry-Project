import { Component, OnInit } from '@angular/core';
import { UserregService } from '../Service/userreg.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  result: any = []
  firstName: string = ''
  date: Date = new Date()

  constructor(private service: UserregService) { }

  ngOnInit() {
    this.service.getData().subscribe(data => {
      console.log(data)
      this.result = data
      this.result = this.result.data.samples
      console.log(this.result)
    })
  }

}
