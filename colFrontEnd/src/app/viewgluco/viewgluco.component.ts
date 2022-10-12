import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { UserregService } from '../Service/userreg.service';

@Component({
  selector: 'app-viewgluco',
  templateUrl: './viewgluco.component.html',
  styleUrls: ['./viewgluco.component.css'],
})
export class ViewglucoComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;

  constructor(private router: Router, private service: UserregService) {}
  glucoResult: any = [];
  ngOnInit() {
    this.service.getgluco().subscribe((data) => {
      console.log(data);
      this.glucoResult = data.data.glucometry;
      console.log(this.glucoResult);
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
      PDF.save('Glucometry.pdf');
    });
  }
}
