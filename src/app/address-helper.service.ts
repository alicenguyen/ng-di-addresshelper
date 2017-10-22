import {Input, Injectable, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import {Address} from "./address.model";

@Injectable()
export class AddressHelperService {

    config: object = {
        apiKey: "kC790mVpIK0HwNHz08gwAhJfclPUoRQt",
        lookOnlyForAddress: true
    };

    diah: any;

    address: Address

    private isInit: boolean = false

    constructor() {
    }


    parse(address: Address) {
        this.diah = new (<any>window).DI.AddressHelper(address.id, this.config)
        this.address = address

        let _this = this;
        this.diah.selectionChangeEvent.subscribe(() => {
            _this.isInit = true

            if (_this.diah && _this.diah.isComplete()) {
                console.log(_this.diah.getSelectedAddress())
                _this.address.update(_this.diah.getSelectedAddress())
            }
        })

        if (this.address.status === 'new') {
            let params = address.getParseStreetAddressAndZipCity()
            this.diah.parseStreetAddressAndZipCity(params.street, params.zip, params.city)
        }
    }
}
