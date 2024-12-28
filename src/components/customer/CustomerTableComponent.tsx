export const CustomerTableComponent = () => {
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
                    <tbody> </tbody>
                </table>
            </div>
        </>
    );
};