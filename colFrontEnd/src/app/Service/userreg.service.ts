import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserregService {

  constructor(private http: HttpClient) {
    // this.getData();
  }
  //submit data
  regData(reg: any) {
    return this.http.post<any>('http://localhost:4000/users/register', reg)
  }

  //login regData
  logData(login: any) {

    return this.http.post<any>('http://localhost:4000/users/login', login)

  }
  getData() {
    return this.http.get<any>("http://localhost:4000/users/users");
  }

  editData(data) {
    return this.http.put<any>("http://localhost:4000/users/getUser/", data)

  }

  //fetchsapmle
  fetchSample() {
    return this.http.get<any>("http://localhost:4000/users/getsample")
  }




}
