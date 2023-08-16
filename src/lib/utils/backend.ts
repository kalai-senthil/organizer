import { API_URL, USER_EMAIL, USER_PASSWORD } from '$env/static/private';
import PocketBase from 'pocketbase';

const pb = new PocketBase(API_URL);

await pb.collection('users').authWithPassword(USER_EMAIL, USER_PASSWORD);

async function getThings() {
	return pb;
}
export { getThings };
export default pb;
