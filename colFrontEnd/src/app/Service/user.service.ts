import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }


  //auth guard to the admin
  isLoggedin() {
    //business Logic
    return true //false restrict the page 
  }

}
