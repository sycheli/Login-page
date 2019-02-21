import { Component, OnInit, ViewChild } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from '../shared/department.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialogConfig, MatDialog } from '@angular/material';
import { EmployeeComponent } from '../employee/employee.component';
import { DialogService } from '../shared/dialog.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor(private employeeService : EmployeeService, private toastr : ToastrService,private departmentService: DepartmentService,private dialog: MatDialog,private dialogService: DialogService) { }
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'position', 'office', 'salary', 'department','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  employeeArray = [];
  searchText : string="";

  ngOnInit() {
    this.employeeService.getData().subscribe(
      list => {
        let array = list.map(item => {
          let department = this.departmentService.getDepartmentName(item.payload.val()['department']);
          return {
            $key: item.key,
            department,
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(ele => {
            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
          });
        };
      });
    
  
 
  
 }
 
 onSearchClear() {
  this.searchKey = "";
  this.applyFilter();
}

applyFilter() {
  this.listData.filter = this.searchKey.trim().toLowerCase();
  
}
onCreate() {
  this.employeeService.initializeFormGroup();
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "60%";
  this.dialog.open(EmployeeComponent,dialogConfig);
}

onEdit(row){
  this.employeeService.populateForm(row);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "60%";
  this.dialog.open(EmployeeComponent,dialogConfig);
}

onDelete($key){
  this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.employeeService.deleteEmployee($key);
        this.toastr.warning('! Deleted successfully','Employee register');
      }
    });
}
}
