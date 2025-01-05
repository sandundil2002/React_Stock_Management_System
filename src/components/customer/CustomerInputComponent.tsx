import {useState} from "react";
import {Customer} from "../../models/customer.ts";
import {CustomerTableComponent} from "./CustomerTableComponent.tsx";
import {useDispatch, useSelector} from "react-redux";
import {addCustomer, deleteCustomer, updateCustomer} from "../../reducers/CustomerSlice.tsx";

export const CustomerInputComponent = () => {

    const dispatch = useDispatch();
    // @ts-ignore
    const customers = useSelector((state) => state.customer);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleCustomerOperation = (type: string) => {
        const fullName = `${firstName} ${lastName}`;
        const newCustomer: Customer = {
            name: fullName,
            address,
            mobile: Number(phone),
            email,
        };

        switch (type) {
            case 'ADD_CUSTOMER':
                dispatch(addCustomer(newCustomer));
                break;
            case 'UPDATE_CUSTOMER':
                dispatch(updateCustomer(newCustomer));
                break;
            case 'DELETE_CUSTOMER':
                dispatch(deleteCustomer(email));
                break;
            default:
                break;
        }
    };
    return (
        <>
            <form className="mx-2 mt-6">
                <div className="grid gap-6 mb-6 md:grid-cols-5">
                    <div>
                        <label htmlFor="first_name"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">First
                            name</label>
                        <input type="text" id="first_name" onChange={(e) => setFirstName(e.target.value)}
                               className="w-full p-2 border rounded capitalize border-blue-600"
                               placeholder="John" required/>
                    </div>
                    <div>
                        <label htmlFor="last_name"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last
                            name</label>
                        <input type="text" id="last_name" onChange={(e) => setLastName(e.target.value)}
                               className="w-full p-2 border rounded capitalize border-blue-600"
                               placeholder="Doe" required/>
                    </div>
                    <div>
                        <label htmlFor="address"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Address</label>
                        <input type="text" id="address" onChange={(e) => setAddress(e.target.value)}
                               className="w-full p-2 border rounded capitalize border-blue-600"
                               placeholder="Galle" required/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Mobile
                            number</label>
                        <input type="number" id="phone" onChange={(e) => setPhone(e.target.value)}
                               className="w-full p-2 border rounded border-blue-600"
                               placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Email</label>
                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}
                               className="w-full p-2 border rounded border-blue-600"
                               placeholder="john.doe@gmail.com" required/>
                    </div>
                </div>
            </form>

            <div className="grid gap-5 md:grid-cols-3 mx-20">
                <button type="button" onClick={() =>handleCustomerOperation('ADD_CUSTOMER')}
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add
                    Customer
                </button>
                <button type="button" onClick={() => handleCustomerOperation('UPDATE_CUSTOMER')}
                        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update
                    Customer
                </button>
                <button type="button" onClick={() => handleCustomerOperation('DELETE_CUSTOMER')}
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete
                    Customer
                </button>
            </div>

            <CustomerTableComponent customers={customers} />
        </>
    );
};