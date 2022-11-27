<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Badge } from "flowbite-svelte";
</script>

<Table class="mt-20">
    <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
    Recent Invoices
    </caption>

    <TableHead>
    <TableHeadCell>No</TableHeadCell>
    <TableHeadCell>Id Customers</TableHeadCell>
    <TableHeadCell>Customers Name</TableHeadCell>
    <TableHeadCell>Items Name</TableHeadCell>
    <TableHeadCell>Order Date</TableHeadCell>
    <TableHeadCell>Status</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
    <TableBodyRow>
        <TableBodyCell>1</TableBodyCell>
        <TableBodyCell>#245837</TableBodyCell>
        <TableBodyCell>Peter Venkman</TableBodyCell>
        <TableBodyCell>1x Proton Pack</TableBodyCell>
        <TableBodyCell>11/17/22 10:23AM</TableBodyCell>
        <TableBodyCell><Badge large={true} color="green">Paid</Badge></TableBodyCell>
        <TableBodyCell>$602</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
        <TableBodyCell>2</TableBodyCell>
        <TableBodyCell>#380765</TableBodyCell>
        <TableBodyCell>Ray Stantz</TableBodyCell>
        <TableBodyCell>1x Toaster</TableBodyCell>
        <TableBodyCell>11/17/22 10:23AM</TableBodyCell>
        <TableBodyCell><Badge large={true} color="yellow">Pending</Badge></TableBodyCell>
        <TableBodyCell>$415</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
        <TableBodyCell>3</TableBodyCell>
        <TableBodyCell>#487681</TableBodyCell>
        <TableBodyCell>Egon Spengler</TableBodyCell>
        <TableBodyCell>1x Slime</TableBodyCell>
        <TableBodyCell>11/17/22 10:23AM</TableBodyCell>
        <TableBodyCell><Badge large={true} color="green">Paid</Badge></TableBodyCell>
        <TableBodyCell>$387</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
        <TableBodyCell>4</TableBodyCell>
        <TableBodyCell>#740582</TableBodyCell>
        <TableBodyCell>Winston Zeddemore</TableBodyCell>
        <TableBodyCell>1x Stay Puft Marshmallow</TableBodyCell>
        <TableBodyCell>11/17/22 10:23AM</TableBodyCell>
        <TableBodyCell><Badge large={true} color="red">Overdue</Badge></TableBodyCell>
        <TableBodyCell>$1234</TableBodyCell>
    </TableBodyRow>
    </TableBody>
    <tfoot class="p-5 h-6 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
    <tr><th /><td /><td /><td /><td /><td /><td /></tr>
    </tfoot>
</Table>