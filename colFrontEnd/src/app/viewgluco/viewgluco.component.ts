import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserregService } from '../Service/userreg.service';

@Component({
  selector: 'app-viewgluco',
  templateUrl: './viewgluco.component.html',
  styleUrls: ['./viewgluco.component.css']
})
export class ViewglucoComponent implements OnInit {

  constructor(private router:Router,private service: UserregService) { }
  glucoResult:any=[]
  ngOnInit() {
    this.service.getgluco().subscribe((data)=>
  { 
    console.log(data)
    this.glucoResult=data.data.glucometry
    console.log(this.glucoResult)
  })
  }

}
