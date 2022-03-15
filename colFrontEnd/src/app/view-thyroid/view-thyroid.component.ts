import { Component, OnInit } from '@angular/core';
import { UserregService } from '../Service/userreg.service';

@Component({
  selector: 'app-view-thyroid',
  templateUrl: './view-thyroid.component.html',
  styleUrls: ['./view-thyroid.component.css']
})
export class ViewThyroidComponent implements OnInit {

  constructor(private service: UserregService) { }
result:any=[]
  ngOnInit(){
    this.service.getthyroid().subscribe((data:any)=> 
    { 
      this.result= data.data.thyroid

      console.log(this.result);
      
    })
  }

}
