import pb from '$lib/utils/backend';
import type { Thing } from '$lib/utils/types';
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
