export class Item {
    category: string;
    description: string;
    price: number;
    quantity: number;

    constructor(category: string, description: string, price: number, quantity: number) {
        this.category = category;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
}