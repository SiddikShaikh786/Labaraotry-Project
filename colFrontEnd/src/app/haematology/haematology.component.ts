import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserregService } from '../Service/userreg.service';

@Component({
  selector: 'app-haematology',
  templateUrl: './haematology.component.html',
  styleUrls: ['./haematology.component.css']
})
export class HaematologyComponent implements OnInit {

  constructor(private service: UserregService,private route: Router) { }

  ngOnInit() {

  }
  haematologyForm = new FormGroup({

    Haemoglobin: new FormControl("", [Validators.required]),

    TotalCount: new FormControl("", [Validators.required]),

    Neutrophils: new FormControl("", [Validators.required]),

    Lymphocytes: new FormControl("", [Validators.required]),

    eosinophils: new FormControl("", [Validators.required]),

    monocytes: new FormControl("", [Validators.required]),

    basophills: new FormControl("", [Validators.required]),

    rbc: new FormControl("", [Validators.required]),

    pcv: new FormControl("", [Validators.required]),

    mcv: new FormControl("", [Validators.required])

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

  get basophills() {

    return this.haematologyForm.get('basophills')

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
    this.service.addhaemo(this.haematologyForm.value).subscribe((data) => {
      console.log(data);

      this.route.navigate(['gethaemo']);
    })



  }
}
