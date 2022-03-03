import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-glucometry',
  templateUrl: './glucometry.component.html',
  styleUrls: ['./glucometry.component.css']
})
export class GlucometryComponent implements OnInit {
  glucomteryForm: FormGroup
  constructor() { }

  ngOnInit() {
    this.glucomteryForm = new FormGroup({
      fasting: new FormControl('', [Validators.required]),
      post: new FormControl('', [Validators.required]),
      gly: new FormControl('', [Validators.required]),
      calcium: new FormControl('', [Validators.required])
    })
  }

  get fasting() {
    return this.glucomteryForm.get('fasting')
  }

  get post() {
    return this.glucomteryForm.get('post')
  }
  get gly() {
    return this.glucomteryForm.get('gly')
  }
  get calcium() {
    return this.glucomteryForm.get('calcium')
  }
  Submit() {
    console.log(this.glucomteryForm.value)
  }

}
