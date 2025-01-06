import {useSelector} from "react-redux";
import {Customer} from "../../models/customer.ts";
import React, {useState} from "react";
import {Item} from "../../models/item.ts";

const OrderInputComponent = () => {
    // @ts-ignore
    const customers = useSelector((state) => state.customer);
    const [customerName, setCustomerName] = useState('');

    // @ts-ignore
    const items = useSelector((state) => state.item);
    const [itemCategory, setItemCategory] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemQty, setItemQty] = useState('');
    const [selectedQty, setSelectedQty] = useState(1);

    const [addedItems, setAddedItems] = useState([]);


    function handleMobileChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedMobile = event.target.value;
        const customer = customers.find((customer: Customer) => customer.mobile === Number(selectedMobile));

        if (customer) {
            setCustomerName(customer.name);
        } else {
            setCustomerName('');
        }
    }

    function getCustomerMobiles() {
        return customers.map((customer: Customer) => (
            <option key={customer.mobile} value={customer.mobile}>
                {customer.mobile}
            </option>
        ));
    }

    function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedCategory = event.target.value;
        const item = items.find((item: Item) => item.category === selectedCategory);

        if (item) {
            setItemCategory(item.category);
            setItemPrice(item.price);
            setItemQty(item.quantity);
        } else {
            setItemCategory('');
            setItemPrice('');
            setItemQty('');
        }
    }

    function getItemCategories() {
        return items.map((item: Item) => (
            <option key={item.category} value={item.category}>
                {item.category}
            </option>
        ));
    }

    function handleAddItem() {
        if (!itemCategory || !itemPrice || selectedQty <= 0) {
            console.log(itemCategory, itemPrice, selectedQty);
            alert("Please select an item and enter a valid quantity.");
            return;
        }

        const totalPrice = Number(itemPrice) * selectedQty;

        if (selectedQty < Number(itemQty)) {
            const newItem = {
                category: itemCategory,
                unitPrice: itemPrice,
                quantity: selectedQty,
                totalPrice,
            };

            // @ts-ignore
            setAddedItems([...addedItems, newItem]);
            setSelectedQty(0);
        } else {
            alert("Selected quantity is not available.");
        }

    }

    return (
        <div className="flex flex-wrap gap-8">
                <div className="w-1/2">
                    <h2 className="text-3xl text-center text-blue-600 font-semibold mb-4">Order Details</h2>
                    <div className="space-y-4">
                        <select className="w-full p-2 border rounded" onChange={handleMobileChange}>
                            <option>Select Customer Mobile Number</option>
                            {getCustomerMobiles()}
                        </select>

                        <input type="text" className="w-full p-2 border rounded capitalize"
                               placeholder="Customer Name" value={customerName} readOnly/>

                        <select className="w-full p-2 border rounded capitalize" onChange={handleCategoryChange}>
                            <option>Select Item Category</option>
                            {getItemCategories()}
                        </select>

                        <input type="number" placeholder="Unit Price" className="w-full p-2 border rounded" value={itemPrice} readOnly/>

                        <input type="number" placeholder={"Available Quantity " + itemQty } className="w-full p-2 border rounded"
                               onChange={(e) => setSelectedQty(Number(e.target.value))}/>

                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleAddItem}>Add Item</button>
                    </div>
                </div>

            <div className="w-2/5">
                <h2 className="text-3xl text-center text-blue-600 font-semibold mb-4">Added Items</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                            <tr className="bg-gray-50">
                                <th className="border p-2 text-left">Category</th>
                                <th className="border p-2 text-left">Unit Price</th>
                                <th className="border p-2 text-left">Quantity</th>
                                <th className="border p-2 text-left">Total Price</th>
                                <th className="border p-2 text-left">Action</th>
                            </tr>
                            </thead>
                            <tbody className="capitalize">
                            {addedItems.map((item, index) => (
                                <tr key={index}>
                                    {/*@ts-ignore*/}
                                    <td className="border p-2">{item.category}</td>
                                    {/*@ts-ignore*/}
                                    <td className="border p-2">{item.unitPrice}</td>
                                    {/*@ts-ignore*/}
                                    <td className="border p-2">{item.quantity}</td>
                                    {/*@ts-ignore*/}
                                    <td className="border p-2">{item.totalPrice}</td>
                                    <td className="border p-2">
                                        <button className="text-red-500 hover:underline"
                                                onClick={() => setAddedItems(addedItems.filter((_, i) => i !== index))}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4">
                        <select className="w-full p-2 border rounded mb-4">
                            <option value="Cash">Cash</option>
                            <option value="Card">Card</option>
                        </select>

                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
    );
};

export default OrderInputComponent;