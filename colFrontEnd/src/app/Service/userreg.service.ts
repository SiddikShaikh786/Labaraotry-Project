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

  //delete USERS
  deleteData(_id: any) {
    return this.http.delete(`http://localhost:4000/users/deleteUsers/${_id}`)
  }

  //ADD THYROID REPORT
  addThyro(thyro: any) {
    return this.http.post<any>("http://localhost:4000/users/addthyro", thyro)
  }


  getToken() {
    if (localStorage.getItem("token")) {
      return true
    }
    else {
      return false
    }
  }

  getAdmin() {
    if (localStorage.getItem('role') === 'admin') {
      return true
    }
    else {
      return false
    }

  }

  getTokens() {
    return localStorage.getItem('token')
  }
}
