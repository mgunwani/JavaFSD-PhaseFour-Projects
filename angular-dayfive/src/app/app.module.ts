import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { MainComponent } from './main/main.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAddComponent } from './user-add/user-add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    MainComponent,
    UserDetailComponent,
    UserAddComponent,
    PageNotFoundComponent,
    UserUpdateComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [MainComponent]
})
export class AppModule { }
