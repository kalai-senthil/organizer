<script lang="ts">
	import AddThing from '$lib/components/AddThing.svelte';
	import Thing from '$lib/components/Thing.svelte';
	import Icon from '@iconify/svelte';
	import { fade, fly, scale } from 'svelte/transition';
	export let data: import('./$types').PageData;
	let showModal = false;
</script>

<section class="page pt-10">
	<h1 class="text-4xl">Organizer</h1>
	<input type="text" class="my-5" placeholder="Search" />
	<div class="grid grid-cols-12 gap-3">
		<AddThing
			on:showModal={() => {
				showModal = !showModal;
			}}
		/>
		{#each data.things as thing, idx (thing.id)}
			<Thing {idx} data={thing} />
		{/each}
	</div>
</section>
{#if showModal}
	<div class="fixed w-full h-full bg-black/50 top-0">
		<section
			in:fly={{ opacity: 0, y: 10 }}
			out:fly={{ opacity: 0, y: -50 }}
			class="max-w-lg mx-auto grid h-3/4 p-2 pt-3 rounded-md shadow-md bg-black m-10"
		>
			<div class="flex justify-between items-center">
				<h3>Add Work</h3>
				<button
					on:click={() => {
						showModal = !showModal;
					}}
				>
					<Icon icon="material-symbols:close" class="icon" />
				</button>
			</div>
		</section>
	</div>
{/if}
