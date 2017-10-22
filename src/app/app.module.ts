import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";

import {AppComponent} from './app.component';
import {AddressDetailComponent} from './address-detail/address-detail.component';
import {AddressListComponent} from './address-list/address-list.component';
import {AddressHelperService} from "./address-helper.service";
import {AddressService} from "./address.service";

import {} from 'dotenv/config'

@NgModule({
    declarations: [
        AppComponent,
        AddressDetailComponent,
        AddressListComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [AddressHelperService, AddressService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
