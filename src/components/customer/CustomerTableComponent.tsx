import {Customer} from "../../models/customer.ts";

export const CustomerTableComponent = (customers: {customers: Customer[]}) => {
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-2 mt-7">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">
                            Customer Name
                        </th>
                        <th className="px-6 py-3">
                            Address
                        </th>
                        <th className="px-6 py-3">
                            Mobile
                        </th>
                        <th className="px-6 py-3">
                            Email
                        </th>
                    </tr>
                    </thead>
                    <tbody className="capitalize">
                        {customers.customers.map((customer:Customer, index:number) => (
                            <tr key={index} className="bg-gray-50 dark:bg-gray-700">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900 dark:text-gray-400">
                                                {customer.name}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900 dark:text-gray-400">{customer.address}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900 dark:text-gray-400">{customer.mobile}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900 dark:text-gray-400">{customer.email}</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};