
function Table() {
    return (
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Recent Invoices
                </caption>
                <thead class="border-b text-xs text-gray-700 uppercase bg-white dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            No
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Id Customers
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Customers Name
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Item Name
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Order Date
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Status
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b">
                        <th scope="row" class="py-4 px-6 font-medium">
                            1
                        </th>
                        <td class="py-4 px-6">
                            #245837
                        </td>
                        <td class="py-4 px-6">
                            Peter Venkman
                        </td>
                        <td class="py-4 px-6">
                            1x Proton Pack
                        </td>
                        <td class="py-4 px-6">
                            11/11/22 8:21PM
                        </td>
                        <td class="py-4 px-6">
                            <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-5 py-1 rounded-full">Paid</span>
                        </td>
                        <td class="py-4 px-6">
                            $602
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium">
                            2
                        </th>
                        <td class="py-4 px-6">
                            #380765
                        </td>
                        <td class="py-4 px-6">
                            Ray Stantz
                        </td>
                        <td class="py-4 px-6">
                            1x Toaster
                        </td>
                        <td class="py-4 px-6">
                            11/11/22 8:21PM
                        </td>
                        <td class="py-4 px-6">
                            <span class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-5 py-1 rounded-full">Pending</span>
                        </td>
                        <td class="py-4 px-6">
                            $415
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium">
                            3
                        </th>
                        <td class="py-4 px-6">
                            #487691
                        </td>
                        <td class="py-4 px-6">
                            Egon Spengler
                        </td>
                        <td class="py-4 px-6">
                            1x Slime
                        </td>
                        <td class="py-4 px-6">
                            11/11/22 8:21PM
                        </td>
                        <td class="py-4 px-6">
                            <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-5 py-1 rounded-full">Paid</span>
                        </td>
                        <td class="py-4 px-6">
                            $387
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium">
                            4
                        </th>
                        <td class="py-4 px-6">
                            #740582
                        </td>
                        <td class="py-4 px-6">
                            Winston Zeddemore
                        </td>
                        <td class="py-4 px-6">
                            2x Stay Puft Marshmallow
                        </td>
                        <td class="py-4 px-6">
                            11/11/22 8:21PM
                        </td>
                        <td class="py-4 px-6">
                            <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-5 py-1 rounded-full">Overdue</span>
                        </td>
                        <td class="py-4 px-6">
                            $1234
                        </td>
                    </tr>
                    <tr class="bg-white"><th class="py-3"></th><td /><td /><td /><td /><td /><td /></tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;