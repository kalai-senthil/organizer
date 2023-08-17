<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	const dispatcher = createEventDispatcher();
</script>

<section
	on:click={() => {
		dispatcher('showModal');
	}}
	in:fly={{ y: 50, opacity: 0 }}
	class="col-span-12 flex justify-center items-center flex-col border rounded-md hover:bg-gray-800/20 cursor-pointer lg:col-span-3"
>
	<Icon icon="material-symbols:add" class="icon text-5xl" />
	Add
</section>
