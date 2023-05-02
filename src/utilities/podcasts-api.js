import sendRequest from "../utilities/send-request"
const BASE_URL = '/api/podcasts';

export function addOne(newPodcast) {
    return sendRequest(BASE_URL, 'POST', newPodcast);
}

export function getAll() {
    return sendRequest(`${BASE_URL}/podcasts`);
}
