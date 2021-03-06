import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { MastersComponent } from './masters.component';
import { DepartmentComponent } from './department/department.component';
import { DoctorDepartmentComponent } from './doctor-department/doctor-department.component';
import { DoctorComponent } from './doctor/doctor.component';
import { UserComponent } from './user/user.component';

const routes: Routes = Route.withShell([
    {
        path: 'masters', component: MastersComponent, data: { title: 'Master' },
        children: [{
            path: 'department',
            component: DepartmentComponent,
            data: { title: 'Department Master' }
        }, {
            path: 'doctor-department',
            component: DoctorDepartmentComponent,
            data: { title: 'Doctor Department Master' }
        }, {
            path: 'doctor',
            component: DoctorComponent,
            data: { title: 'Doctor Master' }
        }, {
            path: 'user',
            component: UserComponent,
            data: { title: 'User Master' }
        }]
    }
]);

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class MastersRoutingModule { }
