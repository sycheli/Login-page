import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { DatePipe } from '@angular/common';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private firebase : AngularFireDatabase,private datePipe: DatePipe) {}
  employeeList : AngularFireList <any>;
  
  form = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    office: new FormControl('', Validators.required),
    salary: new FormControl(''),
    hireDate: new FormControl(''),
    gender: new FormControl('Male'),
    department: new FormControl(0),   
    isPermanent: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      name: '',
      position: '',
      office: '',
      salary: '',
      gender: 'Male',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }
    getData(){
      this.employeeList = this.firebase.list("employees")
      return this.employeeList.snapshotChanges();
    }
    
    insertEmployee(employee){
      this.employeeList.push({
        name: employee.name,
        position: employee.position,
        office: employee.office,
        salary: employee.salary,
        gender: employee.gender,
        department: employee.department,   
        hireDate : employee.hireDate == "" ? "" : this.datePipe.transform(employee.hireDate, 'yyyy-MM-dd'),
        isPermanent: employee.isPermanent

      } );
    }
    updateEmployee(employee){
      this.employeeList.update(employee.$key,
        {
        name: employee.name,
        position: employee.position,
        office: employee.office,
        salary: employee.salary,
        hireDate : employee.hireDate == "" ? "" : this.datePipe.transform(employee.hireDate, 'yyyy-MM-dd'),
        gender: employee.gender,
        department: employee.department,
     
      isPermanent: employee.isPermanent
        });
    }
    deleteEmployee($key : string){
      this.employeeList.remove($key);
    }
    populateForm(employee) {
      this.form.setValue(_.omit(employee,'departments'));
        }
}
