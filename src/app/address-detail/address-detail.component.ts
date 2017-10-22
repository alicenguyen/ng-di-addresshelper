import {Input, Component, AfterViewInit } from '@angular/core';
import {Address} from "../address.model";
import {AddressHelperService} from "../address-helper.service";

/**
 * @example
 * <ze-address-detail></ze-address-detail>
 */
@Component({
    selector: 'ze-address-detail',
    templateUrl: './address-detail.component.html',
    styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements AfterViewInit {
    @Input('address') address: Address;

    constructor(private _diah: AddressHelperService) { }

    ngAfterViewInit() {
        this._diah.parse(this.address)
    }
}
