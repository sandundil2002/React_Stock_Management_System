export class Order {
    customer: string;
    mobile: number;
    category: string;
    unitPrice: number;
    quantity: number;
    totalPrice: number;

    constructor(customer: string, mobile:number, category: string, unitPrice: number, quantity: number, totalPrice: number) {
        this.customer = customer;
        this.mobile = mobile;
        this.category = category;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
}