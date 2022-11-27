<script>
  import { Navbar, NavBrand, NavLi, NavUl, Card } from "flowbite-svelte";
  import Sidebar from "./Sidebar.svelte";
  import TopCard from "./TopCard.svelte";
  import InvoiceTable from "./InvoiceTable.svelte";
</script>


<Sidebar />
<div class="w-screen pl-64">
  <div class="fixed top-0 w-screen">
    <Navbar class="h-20 bg-white">
      <NavBrand href="/" class="-ml-40">
        Welcome, Back!
      </NavBrand>
      <NavUl>
        <NavLi></NavLi>
      </NavUl>
    </Navbar>
  </div>
  <main class="h-screen pt-20 px-20">
    <div class="flex mt-20 justify-between">
      <TopCard cardColor="#4e5fcd" title="Customers" amount="1,456" changeAmount="+6.5%" changeTime="Since last week" />
      <TopCard cardColor="#8bbec3" title="Revenue" amount="$3.345" changeAmount="-0.10%" changeTime="Since last week" />
      <TopCard cardColor="#4e5fcd" title="Profit" amount="60%" changeAmount="-0.2%" changeTime="Since last week" />
      <TopCard cardColor="#769dec" title="Invoices" amount="1,135" changeAmount="+11.5%" changeTime="Since last week" />
    </div>

    <div class="flex mt-20 h-96">
      <Card class="w-1/2 max-w-none mr-20"></Card>
      <Card class="w-full max-w-none"></Card>
    </div>

    <InvoiceTable />
  </main>
</div>