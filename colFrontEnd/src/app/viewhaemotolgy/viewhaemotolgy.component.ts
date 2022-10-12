import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { UserregService } from '../Service/userreg.service';

@Component({
  selector: 'app-viewhaemotolgy',
  templateUrl: './viewhaemotolgy.component.html',
  styleUrls: ['./viewhaemotolgy.component.css'],
})
export class ViewhaemotolgyComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;

  result: any = [];
  constructor(private service: UserregService) {}

  ngOnInit() {
    this.service.gethaemo().subscribe((data) => {
      console.log(data);
      this.result = data.data.haemotologyR;
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
      PDF.save('Haemotolgy.pdf');
    });
  }
}
