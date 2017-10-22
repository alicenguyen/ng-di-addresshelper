import {Injectable} from '@angular/core';
import {Address} from "./address.model";

@Injectable()
export class AddressService {

    addresses: Address[] = [
        new Address("Veslebakken", "2A", "Drammen", 3047),
    ]

    constructor() {

    }

    getAddresses(): Address[] {
        return this.addresses;
    }

    getAddress(): Address {
        return this.addresses[0];
    }

}
