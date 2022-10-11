import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { UserregService } from '../Service/userreg.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css'],
})
export class ViewdetailsComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;

  gluco: any;
  haemo: any = [];
  data1: any;

  constructor(
    private service: UserregService,
    private route: Router,
    private rout: ActivatedRoute
  ) {}

  result: any;
  ngOnInit() {
    this.service.fetchSample().subscribe((data) => {
      this.result = data;
      console.log('All details :-', this.result.data);
      this.haemo = this.result.data[0].haemotology;
      this.gluco = this.result.data[0].glucometry;

      console.log(this.haemo);
      console.log(this.gluco);
    });
  }
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    console.log(DATA);
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Report.pdf');
    });
  }
}
