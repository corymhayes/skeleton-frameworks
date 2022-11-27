<script>
    import { Card } from "flowbite-svelte";
    export let cardColor, title, amount, changeAmount, changeTime;
</script>

<Card class="w-1/4">
    <div class="border-l-[6px] border-[#{cardColor}] pl-4 flex">
        <div>
        { title } <br />
        <span class="text-3xl font-bold">{ amount }</span>
        </div>

        <div class="h-10 w-10 bg-[{cardColor}] opacity-20 ml-20"></div>
    </div>

    <div class="mt-5">
        {#if changeAmount[0] == "+"}
            <span class="text-[#6eae8a] font-bold">{ changeAmount }</span> { changeTime }
        {:else}
            <span class="text-[#c7534f] font-bold">{ changeAmount }</span> { changeTime }
        {/if}
    </div>
</Card>