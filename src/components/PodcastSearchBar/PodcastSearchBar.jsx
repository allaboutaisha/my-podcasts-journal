import { useState, useEffect } from 'react';

export default function PodcastSeachBar() {
    const [podcastSearch, setPodcastSearch] = useState('');
    const [accessToken, setAccessToken] = useState('');

    useEffect(() => {
        let authParameters = {
            method:'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
             },
            body: 'grant_type=client_credentials&client_id=' + process.env.CLIENT_ID + '&client_secret=' + process.env.CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => console.log(data))
        }, []);

    async function search() {
        console.log("Search for " + podcastSearch);
        let showParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }
        let showID = await fetch('https://api.spotify.com/v1/search?q=' + podcastSearch + 'type=show' + showParameters)
            .then(response => response.json())
            .then(data => { return data.shows.items[0].id })   
        console.log("Show ID is " + showID);
    }

    return (
        <div class="container-fluid">
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChan />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>)
};
