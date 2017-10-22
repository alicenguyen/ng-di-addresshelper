export class Address {
    id: string
    city: string
    zip: number
    isValid: boolean
    payload: object = {}
    name: string
    streetName: string
    streetNumber: string
    status: string = 'new'
    country: string
    apt: string


    constructor(street: string, streetNumber: string, city: string, zip: number) {
        this.streetName = street
        this.streetNumber = streetNumber
        this.city = city
        this.zip = zip
        this.apt = ''

        this.isValid = false

        // meant for the diah widget. using street name for now
        this.id = `ze-address-${Math.random().toString(36).slice(2)}`

        console.log(this.id)
    }

    update(data) {
        this.payload = data
        this.streetName = data.street.streetName
        this.streetNumber = data.streetNumber.streetNo || ''
        this.zip = data.street.postalCode
        this.city = data.street.city
        this.zip = data.streetNumber.postalCode
        this.isValid = true
        this.status = 'dirty'
        this.country = data.street.countryCode || ''
        this.apt = data.streetNumber.entrance || ''

        this.name = this.toString()
    }


    toString() {
        return `${this.streetName} ${this.streetNumber} ${this.apt}, ${this.zip} ${this.city} ${this.country ? `, ${this.country} ` : ''} `
    }

    getParseStreetAddressAndZipCity() {
        return {
            street: `${this.streetName} ${this.streetNumber}${this.apt}`,
            zip: this.zip,
            city: this.city
        }
    }
}
