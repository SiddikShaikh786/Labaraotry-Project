import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-haematology',
  templateUrl: './haematology.component.html',
  styleUrls: ['./haematology.component.css']
})
export class HaematologyComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  haematologyForm = new FormGroup({

    Haemoglobin: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),

    TotalCount: new FormControl("", [Validators.required, Validators.maxLength(30), Validators.minLength(7)]),

    Neutrophils: new FormControl("", [Validators.required, Validators.minLength(7), Validators.maxLength(12)]),

    Lymphocytes: new FormControl("", [Validators.required, Validators.minLength(7), Validators.maxLength(12)]),

    eosinophils: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),

    monocytes: new FormControl("", [Validators.required, Validators.maxLength(30), Validators.minLength(7),]),

    basophils: new FormControl("", [Validators.required, Validators.minLength(7), Validators.maxLength(12)]),

    rbc: new FormControl("", [Validators.required, Validators.minLength(7), Validators.maxLength(12)]),

    pcv: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),

    mcv: new FormControl("", [Validators.required, Validators.maxLength(30), Validators.minLength(7)])

  })
  get Haemoglobin() {

    return this.haematologyForm.get('Haemoglobin')

  }

  get TotalCount() {

    return this.haematologyForm.get('TotalCount')

  }

  get Neutrophils() {

    return this.haematologyForm.get('Neutrophils')

  }

  get Lymphocytes() {

    return this.haematologyForm.get('Lymphocytes')

  }

  get eosinophils() {

    return this.haematologyForm.get('eosinophils')

  }

  get monocytes() {

    return this.haematologyForm.get('monocytes')

  }

  get basophils() {

    return this.haematologyForm.get('basophils')

  }

  get rbc() {

    return this.haematologyForm.get('rbc')

  }

  get pcv() {

    return this.haematologyForm.get('pcv')

  }

  get mcv() {

    return this.haematologyForm.get('mcv')

  }

  Submit() {

    console.log(this.haematologyForm.value);



  }
}
