import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type" : "application/json",
    "Accept": "application/json",
   })
};

@Injectable({
  providedIn: 'root'
})

export class EmpDataService {

  apiUrl = "http://localhost:3000/employees";
  constructor(private _http: HttpClient) { }
  getEmployeeDetails(){
    return this._http.get<Blob>(this.apiUrl, httpOptions);


  }
  getEmployee(empId){
    return this._http.get<Blob>(this.apiUrl+"?empId="+empId, httpOptions);

  }
}
