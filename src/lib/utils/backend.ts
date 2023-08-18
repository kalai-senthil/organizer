import PocketBase from 'pocketbase';
import type { Thing } from './types';
import { API_URL, USER_EMAIL, USER_PASSWORD } from '$env/static/private';

const pb = new PocketBase(API_URL);

await pb.collection('users').authWithPassword(USER_EMAIL, USER_PASSWORD);

function getThings() {
	return pb;
}
function getUserId() {
	return pb.authStore.isValid ? pb.authStore.model?.id : null;
}

function postThing(thing: Omit<Thing, 'id'>) {
	return pb.collection('things').create(thing);
}

export { getThings, postThing, getUserId };
export default pb;
