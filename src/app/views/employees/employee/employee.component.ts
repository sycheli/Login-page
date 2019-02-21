import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service'
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from '../shared/department.service';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService : EmployeeService,
     private toastr : ToastrService,
    private departmentService: DepartmentService,
    public dialogRef: MatDialogRef<EmployeeComponent> ) { }


  
  
  ngOnInit() {
     this.employeeService.getData();
    
  }
  
 onSubmit(){
  if (this.employeeService.form.valid) {
   if(!this.employeeService.form.get('$key').value)
  this.employeeService.insertEmployee(this.employeeService.form.value);
  else
  this.employeeService.updateEmployee(this.employeeService.form.value);
  this.resetForm();
  this.employeeService.initializeFormGroup();
  this.toastr.success('Submitted Successfully','Employee Register')
  this.onClose();
}
 }
 resetForm(){
  
   this.employeeService.form.reset();
   this.employeeService.initializeFormGroup();
 }
 onClose() {
  this.employeeService.form.reset();
  this.employeeService.initializeFormGroup();
  this.dialogRef.close();
}
}
