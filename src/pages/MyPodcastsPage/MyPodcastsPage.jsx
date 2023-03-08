import { Link } from 'react-router-dom';

export default function MyPodcastsPage() {
    return(
        <>
        <h1>My Podcasts</h1>
        <Link to='/podcasts/new'>Add Podcast</Link>
        </>
        )
}