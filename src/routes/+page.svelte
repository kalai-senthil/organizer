<script lang="ts">
	import { enhance } from '$app/forms';
	import AddThing from '$lib/components/AddThing.svelte';
	import Thing from '$lib/components/Thing.svelte';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	export let data: import('./$types').PageData;
	let showModal = true;
	let title: string, description: string, tags: string;
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
			class="max-w-lg flex flex-col mx-auto h-3/4 p-2 pt-3 rounded-md shadow-md bg-black m-10 mt-20"
		>
			<div class="flex items-start justify-between">
				<h3>Add Work</h3>
				<button
					on:click={() => {
						showModal = !showModal;
					}}
				>
					<Icon icon="material-symbols:close" class="icon" />
				</button>
			</div>
			<form method="post" use:enhance action="?/postThing" class="flex flex-col gap-y-2 px-5 grow">
				<label for="title">Title</label>
				<input bind:value={title} type="text" name="title" />
				<label for="description">Description</label>
				<input type="text" bind:value={description} name="description" />
				<label for="tags">Tags</label>
				<input type="text" name="tags" bind:value={tags} />
				<div class="grow" />
				<input
					class="mb-10"
					type="submit"
					on:click={() => {
						showModal = !showModal;
						title = '';
						description = '';
						tags = '';
					}}
				/>
			</form>
		</section>
	</div>
{/if}
