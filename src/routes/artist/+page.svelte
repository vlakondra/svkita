<script lang="ts">
	//npm run db:push
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

{JSON.stringify(data)}

    {#if data?.artResult} 
        {#each data.artResult as item}
            <div>{item.artistId} -- {item.name}</div>
        {/each}
    {:else}
        <div>Данных нет</div>
    {/if}

<p style="color: red">{data?.err ?? ''}</p> 
