<script lang="ts">
	import Thing from '$lib/components/Thing.svelte';
	export let data: import('./$types').PageData;
</script>

<section class="page pt-10">
	<h1 class="text-4xl">Organizer</h1>
	<input type="text" class="my-5" placeholder="Search" />
	<div class="grid grid-cols-12 gap-3">
		{#each data.things as thing, idx (thing.id)}
			<Thing {idx} data={thing} />
		{/each}
	</div>
</section>
