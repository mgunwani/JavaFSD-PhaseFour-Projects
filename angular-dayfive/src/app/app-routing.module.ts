import { EmployeesComponent } from './employees/employees.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: 'user-add', component: UserAddComponent },
  { path: 'user-update/:id', component: UserUpdateComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
