<script setup>
  import Sidebar from "./components/Sidebar.vue";
  import Navbar from "./components/Navbar.vue";
  import TopCard from "./components/TopCard.vue";
  import Table from "./components/Table.vue";
  import PieGraphCard from "./components/PieGraphCard.vue";
  import LineGraphCard from "./components/LineGraphCard.vue";
</script>

<template>
  <div class="fixed top-0 left-0">
    <Navbar />
  </div>
  <div class="fixed top-0 left-0">
    <Sidebar />
  </div>
  <main class="mt-32 ml-80 pr-16">
    <div class="flex justify-between">
      <TopCard />
      <TopCard />
      <TopCard />
      <TopCard />
    </div>

    <div class="mt-8 flex justify-between">
      <PieGraphCard />
      <LineGraphCard />
    </div>

    <div class="mt-8">
      <Table />
    </div>
  </main>
</template>
