import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { EmployeesComponent } from './views/employees/employees.component';



const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
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