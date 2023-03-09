import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addOne } from '../../utilities/podcasts-api';

export default function PodcastForm() {
    const navigate = useNavigate();
    const [newPodcast, setNewPodcast] = useState(
        {
            name: '',
            host: '',
            thumbnail: '',
            episodeName: '',
            episodeNum: '',
            guest: '',
            dateListened: '',
            listening: '',
            genre: '',
            rating: '',
            confirm: '',
            error: ''
        }
    );

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setNewPodcast({ ...newPodcast, [e.target.id]: e.target.value });
        setError('Error');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const podcast = await addOne(newPodcast);
            setNewPodcast(podcast);
            navigate('/podcasts');
        } catch {
            console.log(newPodcast);
            setError('Error');
        } 
    }

        return (
            <form onSubmit={ handleSubmit }>
                <div className="row mb-3">
                    <label htmlFor="name" className="visually-hidden">Podcast</label>
                    <input type="text" className="form-control" id="name" placeholder="Podcast" value={newPodcast.name} onChange={handleChange} required />
                </div>
                <div className="row mb-3">
                    <label htmlFor="host" className="visually-hidden">Host</label>
                    <input type="text" className="form-control" id="host" placeholder="Host" value={newPodcast.host} onChange={handleChange} required />
                </div>
                <div className="row mb-3">
                    <label htmlFor="thumbnail" className="visually-hidden">Thumbnail URL</label>
                    <input type="text" className="form-control" id="thumbnail" placeholder="Thumbnail URL" value={newPodcast.thumbnail} onChange={handleChange} />
                </div>
                <div className="row mb-3">
                    <label htmlFor="episodeName" className="visually-hidden">Episode</label>
                    <input type="text" className="form-control" id="episodeName" placeholder="Episode" value={newPodcast.episodeName} onChange={handleChange} />
                </div>
                <div className="row mb-3">
                    <label htmlFor="episodeNum" className="visually-hidden">Episode Number</label>
                    <input type="text" className="form-control" id="episodeNum" placeholder="Episode Number" value={newPodcast.episodeNum} onChange={handleChange} />
                </div>
                <div className="row mb-3">
                    <label htmlFor="guest" className="visually-hidden">Guest</label>
                    <input type="text" className="form-control" id="guest" placeholder="Guest" value={newPodcast.guest} onChange={handleChange} />
                </div>
                <div className="row mb-3">
                    <label htmlFor="dateListened" className="visually-hidden">Date</label>
                    <input type="date" className="form-control" id="dateListened" value={newPodcast.dateListened} onChange={handleChange} />
                </div>
                <div>
                    <select className="form-select" aria-label="Default select example" id="listening" value={newPodcast.listening} onChange={handleChange} >
                        <option defaultValue>Listening?</option>
                        <option value={'listening'}>Currently Listening</option>
                        <option value={'listened'}>Listened</option>
                        <option value={'wantToListen'}>Want to Listen</option>
                    </select>
                </div>
                <div>
                    {/* add conditional to show rating option for listened, listening only */}
                    <select className="form-select" aria-label="Default select example" id="rating" value={newPodcast.rating} onChange={handleChange} >
                        <option defaultValue>Rating</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        <option value={4}>Four</option>
                        <option value={5}>Five</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Add Podcast</button>
            </form>
        )
    }