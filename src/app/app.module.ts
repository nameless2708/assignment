import { ToastModule } from './typescripts/pro/alerts/toast/toast.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MDBBootstrapModule } from './typescripts/free';
import { MDBBootstrapModulePro } from './typescripts/pro/index';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { MDBSpinningPreloader } from './typescripts/pro/index';
import { HomeComponent } from './home/home.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { AppRoutingModule } from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import {MDBModalService} from './typescripts/free/modals';
import { ClickOutsideModule } from 'ng-click-outside';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FilterComponent } from './filter/filter.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CustomersListComponent,
        AddCustomerComponent,
        OpportunityComponent,
        InputComponent,
        TableComponent,
        ButtonComponent,
        DropdownComponent,
        InputTextComponent,
        FilterComponent,
        ButtonsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ClickOutsideModule,
        ToastModule.forRoot(),
        MDBBootstrapModule.forRoot(),
        MDBBootstrapModulePro.forRoot(),
        AgmCoreModule.forRoot({
            // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
            apiKey: 'Your_api_key'
        }),
        AppRoutingModule
    ],
    providers: [MDBSpinningPreloader, FormBuilder,  ReactiveFormsModule, MDBModalService],
    bootstrap: [AppComponent],
    schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
