import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as podcastsAPI from '../../utilities/podcasts-api';
import PodcastsList from '../../components/PodcastsList/PodcastsList';

export default function MyPodcastsPage() {
    const [podcasts, setPodcasts] = useState([{}]);
    
    useEffect(function() {
        async function getPodcasts() {
            const podcasts = await podcastsAPI.getAll();
            setPodcasts(podcasts);
        }
        getPodcasts();
    }, []);

    return(
        <>
        <h1>My Podcasts</h1>
        <Link to='/podcasts/new'>Add Podcast</Link>
        <PodcastsList podcasts={podcasts} />
        </>
        )
}