<script lang="ts">
	export let data: Thing;
	export let idx: number;
	let show = false;
	onMount(() => {
		setTimeout(() => {
			show = true;
		}, 200);
	});
	import type { Thing } from '$lib/utils/types';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
</script>

{#if show}
	<section
		in:fly={{ y: 50, opacity: 0, delay: idx * 200 }}
		class="border col-span-12 md:col-span-3 p-2 rounded-md"
	>
		<h4>{data.title}</h4>
		<h4>{data.description}</h4>
		<h4>{data.tags}</h4>
	</section>
{/if}
