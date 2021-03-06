import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import {AppComponent} from './app.component';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {OpportunityComponent} from './opportunity/opportunity.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'home', component: HomeComponent },
    { path: 'customers', component: CustomersListComponent },
    { path: 'add', component: AddCustomerComponent},
    { path: 'oppo', component: OpportunityComponent}
];

@NgModule({
    exports: [ RouterModule ],
    imports: [
        RouterModule.forRoot(routes)
    ],
    declarations: []
})
export class AppRoutingModule { }
