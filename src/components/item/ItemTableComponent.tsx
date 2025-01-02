import {Item} from "../../models/item.ts";

export const ItemTableComponent = (items: {items: Item[] }) => {
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-2 mt-7">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">
                            Item Category
                        </th>
                        <th className="px-6 py-3">
                            Description
                        </th>
                        <th className="px-6 py-3">
                            Price
                        </th>
                        <th className="px-6 py-3">
                            Quantity
                        </th>
                    </tr>
                    </thead>
                    <tbody className="capitalize">
                    {items.items.map((item: Item, index: number) => (
                        <tr key={index} className="bg-gray-50 dark:bg-gray-700">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900 dark:text-gray-400">
                                            {item.category}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900 dark:text-gray-400">{item.description}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900 dark:text-gray-400">{item.price}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900 dark:text-gray-400">{item.quantity}</div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};