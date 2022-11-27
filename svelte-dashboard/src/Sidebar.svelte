<script>
    import { Sidebar, SidebarBrand, SidebarGroup, SidebarItem, SidebarWrapper } from "flowbite-svelte";
    let site = {
      name: "",
      href: "/",
      img: ""
    };
</script>
  
<Sidebar class="fixed top-0 left-0">
  <SidebarWrapper class="h-screen rounded-none bg-[#1a1f2e]">
    <SidebarGroup>
      <SidebarBrand {site} />
      <SidebarItem label="Dashboard" class="text-[rgb(155,155,155)]">
        <svelte:fragment slot="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Products" class="text-[rgb(155,155,155)]" />
      <SidebarItem label="Store" class="text-[rgb(155,155,155)]" />
      <SidebarItem label="Statistics" class="text-[rgb(155,155,155)]" />
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>