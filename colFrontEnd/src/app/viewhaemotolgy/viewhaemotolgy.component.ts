import { Component, OnInit } from '@angular/core';
import { UserregService } from '../Service/userreg.service';

@Component({
  selector: 'app-viewhaemotolgy',
  templateUrl: './viewhaemotolgy.component.html',
  styleUrls: ['./viewhaemotolgy.component.css']
})
export class ViewhaemotolgyComponent implements OnInit {
result:any=[]
  constructor(private service: UserregService) { }

  ngOnInit() {
    this.service.gethaemo().subscribe((data)=>
    { 
      console.log(data)
      this.result=data.data.haemotologyR
      console.log(this.result)
    })
  }

}
