import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {EmpDataService} from '../../services/emp-data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {


  empId = new FormControl('', [Validators.required]);
searchId;
  constructor(private empData : EmpDataService) { }
  empl : object;
  ngOnInit() {
  }

  search(){
    console.log(this.empId.value);
    this.searchId= this.empId.value;
    // this.empData.getEmployeeDetails().subscribe((data : object)=>
    // {
    //   console.log(data);
    //   this.empl = data;
    // });

    }
    onSearchChange(){
      this.searchId= this.empId.value;

    }
    clear(){
      this.empl=null;
      console.log(this.empl);
    }

}
