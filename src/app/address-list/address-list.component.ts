import {Component, OnInit} from '@angular/core';
import {Address} from "../address.model";
import {AddressService} from "../address.service";

@Component({
    selector: 'ze-address-list',
    templateUrl: './address-list.component.html',
    styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
    addresses: Address[]
    address: Address

    constructor(private _as: AddressService) {
    }

    ngOnInit() {
        this.address = this._as.getAddress()
        this.addresses = this._as.getAddresses()
    }

    createAddress() {
        this.addresses.push(new Address("", "", "", 0))
    }
}
