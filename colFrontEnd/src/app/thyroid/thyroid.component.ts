import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-thyroid',
  templateUrl: './thyroid.component.html',
  styleUrls: ['./thyroid.component.css']
})
export class ThyroidComponent implements OnInit {
  thyroidForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.thyroidForm = new FormGroup({
      tri: new FormControl('', [Validators.required]),
      thyroxine: new FormControl('', [Validators.required]),
      tsh: new FormControl('', [Validators.required]),

    })
  }
  get tri() {
    return this.thyroidForm.get('tri');
  }

  get thyroxine() {
    return this.thyroidForm.get('thyroxine')
  }
  get tsh() {
    return this.thyroidForm.get('tsh')
  }

  Submit() {
    console.log(this.thyroidForm.value)
  }

}
