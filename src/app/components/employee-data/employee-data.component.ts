import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import {EmpDataService} from  "../../services/emp-data.service"
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {
@Input() empId : number;
employeeExists : boolean;
  empl : Object;
  msg : String;
  firstName : String;
  lastName : String;
  email : String;
  designation: String;
  constructor(private empService : EmpDataService) {
     this.empl= null;
 }

 ngOnChanges(changes: SimpleChanges) {
  const empId: SimpleChange = changes.empId;
  console.log('prev value: ', empId.previousValue);
  console.log('got name: ', empId.currentValue);
  this.empId = empId.currentValue;
  this.change();
}


  ngOnInit() {
    this.empService.getEmployee(this.empId).subscribe((data : object)=>{
      if(data[0]){
        this.employeeExists=true;
      this.empl=data;
      this.firstName = this.empl[0].firstName;
      this.lastName=this.empl[0].lastName;
      this.email=this.empl[0].email;
      this.designation=this.empl[0].designation;
      }
      else{
        this.msg ="Invalid ID"
        this.empl= null;
        this.employeeExists=false;
      }
      // console.log(this.empl[0]);

    })
  }

  change(){
    this.empService.getEmployee(this.empId).subscribe((data : object)=>{
      if(data[0]){
        this.employeeExists=true;
      this.empl=data;
      this.firstName = this.empl[0].firstName;
      this.lastName=this.empl[0].lastName;
      this.email=this.empl[0].email;
      this.designation=this.empl[0].designation;
      }
      else{
        this.msg ="Enter a valid Id."
        this.empl= null;
        this.employeeExists=false;
      } // console.log(this.empl[0]);
    })
  }




}
