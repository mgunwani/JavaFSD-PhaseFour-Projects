import { CustomersComponent } from './customers/customers.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { EmployeeServiceComponent } from './employee-service/employee-service.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from "@angular/router";

export const applicationRoutes: Routes = [
    // { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'customers', component: CustomersComponent },
    {
        path: 'service', component: ServiceComponent, children: [
            { path: '', redirectTo: 'employee-service', pathMatch: 'full' },
            { path: 'employee-service', component: EmployeeServiceComponent },
            { path: 'customer-service', component: CustomerServiceComponent }
        ]
    },
    { path: '**', component: PageNotFoundComponent }
]