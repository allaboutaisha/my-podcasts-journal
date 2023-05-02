import { useState, useEffect } from 'react';

export default function PodcastSeachBar() {
    const [podcastSearch, setPodcastSearch] = useState('');

    return (
        <div className="container-fluid">
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={event => setPodcastSearch(event.target.value)} />
                <button className="btn btn-outline-success" type="submit" >Search</button>
            </form>
        </div>)
};

