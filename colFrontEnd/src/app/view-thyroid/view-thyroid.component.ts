import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { UserregService } from '../Service/userreg.service';

@Component({
  selector: 'app-view-thyroid',
  templateUrl: './view-thyroid.component.html',
  styleUrls: ['./view-thyroid.component.css'],
})
export class ViewThyroidComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;

  constructor(private service: UserregService) {}
  result: any = [];
  ngOnInit() {
    this.service.getthyroid().subscribe((data: any) => {
      this.result = data.data.thyroid;

      console.log(this.result);
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
      PDF.save('Thyroid.pdf');
    });
  }
}
