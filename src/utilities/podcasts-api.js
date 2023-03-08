import sendRequest from './send-request'; 
const BASE_URL = '/api/podcasts';

export function addOne(formData) {
    return sendRequest(BASE_URL, 'POST', formData);
}

