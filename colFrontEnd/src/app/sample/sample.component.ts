import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent implements OnInit {
  sampleForm: FormGroup;
  select: any;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sampleForm = new FormGroup({
      haem: new FormControl('', [Validators.requiredTrue]),
      gluco: new FormControl('', [Validators.requiredTrue]),
      thyro: new FormControl('', [Validators.requiredTrue]),
    });
    this.route.queryParams.subscribe((params: any) => {
      // console.log(params)
    });
  }
  get haem() {
    return this.sampleForm.get('haem');
  }
  get gluco() {
    return this.sampleForm.get('gluco');
  }

  get thyro() {
    return this.sampleForm.get('thyro');
  }
  Submit() {
    let { haem, gluco, thyro } = this.sampleForm.value;
    console.log(this.select);
      this.router.navigate([`/${this.select}`]);
  }
  
}
