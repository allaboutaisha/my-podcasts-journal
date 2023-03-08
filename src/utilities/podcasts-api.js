import sendRequest from './send-request'; 
const BASE_URL = '/api/podcasts';

export function addOne(newPodcast) {
    return sendRequest(BASE_URL, 'POST', newPodcast);
}

