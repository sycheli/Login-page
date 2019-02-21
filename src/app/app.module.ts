import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app.routes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { EmployeeComponent } from './views/employees/employee/employee.component';
import { EmployeeListComponent } from './views/employees/employee-list/employee-list.component';
import { ToastrModule } from 'ngx-toastr';
import { EmployeeService } from './views/employees/shared/employee.service';
import { MaterialModule } from './views/material/material.module';
import { EmployeesComponent } from './views/employees/employees.component';
import { DatePipe } from '@angular/common';
import { DepartmentService } from './views/employees/shared/department.service';
import { MatConfirmDialogComponent } from './views/mat-confirm-dialog/mat-confirm-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeesComponent,
    MatConfirmDialogComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutes,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [AuthService, AuthGuard,DepartmentService,EmployeeService,DatePipe],
  bootstrap: [AppComponent],
  entryComponents:[EmployeeComponent,MatConfirmDialogComponent]
})
export class AppModule { }
