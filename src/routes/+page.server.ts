import pb from '$lib/utils/backend';
import type { Thing } from '$lib/utils/types';
import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const records = await pb.collection('things').getFullList({
		sort: '-created'
	});
	const data: Thing[] = [];
	records.map((record) => {
		const d = record.export() as Thing;

		data.push({
			completed: d.completed,
			description: d.description,
			id: d.id,
			tags: d.tags,
			title: d.title,
			user: d.user
		});
	});

	return { things: data };
}) satisfies PageServerLoad;

export const actions: import('./$types').Actions = {
	postThing: async (event) => {
		try {
			const formData = await event.request.formData();
			await pb.collection('things').create({
				title: formData.get('title'),
				description: formData.get('description'),
				tags: formData.get('tags'),
				user: pb.authStore.model?.id,
				completed: false
			});

			return { success: true, msg: 'Uploaded Successfully' };
		} catch (error) {
			fail(400, { msg: 'Error', success: false });
		}
	}
} satisfies Actions;
