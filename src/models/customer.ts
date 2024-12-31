export class Customer {
    name: string;
    address: string;
    mobile: number;
    email: string;

    constructor(name: string, address: string, mobile: number, email: string) {
        this.name = name;
        this.address = address;
        this.mobile = mobile;
        this.email = email;
    }
}