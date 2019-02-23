import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/user/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { EmployeesComponent } from './views/employees/employees.component';
import { RegisterComponent } from './views/user/register/register.component';
import { UserComponent } from './views/user/user.component';



const appRoutes: Routes = [
    {
        path: 'register', component: UserComponent,
        children: [{ path: '', component: RegisterComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: LoginComponent }]
    },
    { path : '', redirectTo:'/login', pathMatch : 'full'},
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
    },
    {
        path: 'employees',
        component: EmployeesComponent
    },
    
    
    
    
];

export const AppRoutes = RouterModule.forRoot(appRoutes);