import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserregService } from './Service/userreg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colProject';

  constructor(public service: UserregService, private router: Router) { }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
