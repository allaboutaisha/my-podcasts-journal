import { Component } from 'react';
import { addOne } from '../../utilities/podcasts-api';

export default class PodcastForm extends Component {
    state = {
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

    handleChange = (e) => {
        this.setState({ 
            [e.target.id]: e.target.value,
            error: 'Error'
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = {...this.state};
            console.log(formData)
            delete formData.error;
            delete formData.confirm;
            const podcast = await addOne(formData);
            this.props.setPodcast(podcast)
            alert(`${podcast}`);
        } catch {
            this.setState({ error: 'Error' });
        } 
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div className="row mb-3">
                    <label for="name" className="visually-hidden">Podcast</label>
                    <input type="text" className="form-control" id="name" placeholder="Podcast" value={this.state.name} onChange={ this.handleChange } required />
                </div>
                <div className="row mb-3">
                    <label for="host" className="visually-hidden">Host</label>
                    <input type="text" className="form-control" id="host" placeholder="Host" value={this.state.host} onChange={ this.handleChange } required />
                </div>
                <div className="row mb-3">
                    <label for="thumbnail" className="visually-hidden">Thumbnail URL</label>
                    <input type="text" className="form-control" id="thumbnail" placeholder="Thumbnail URL" value={this.state.thumbnail} onChange={ this.handleChange } />
                </div>
                <div className="row mb-3">
                    <label for="episodeName" className="visually-hidden">Episode</label>
                    <input type="text" className="form-control" id="episodeName" placeholder="Episode" value={this.state.episodeName} onChange={ this.handleChange } />
                </div>
                <div className="row mb-3">
                    <label for="episodeNum" className="visually-hidden">Episode Number</label>
                    <input type="text" className="form-control" id="episodeNum" placeholder="Episode Number" value={this.state.episodeNum} onChange={ this.handleChange } />
                </div>
                <div className="row mb-3">
                    <label for="guest" className="visually-hidden">Guest</label>
                    <input type="text" className="form-control" id="guest" placeholder="Guest" value={this.state.guest} onChange={ this.handleChange } />
                </div>
                <div className="row mb-3">
                    <label for="dateListened" className="visually-hidden">Date</label>
                    <input type="date" className="form-control" id="dateListened" value={this.state.dateListened} onChange={ this.handleChange } />
                </div>
                <div>
                    <select className="form-select" aria-label="Default select example" id="listening" value={this.state.listening} onChange={ this.handleChange } >
                        <option selected>Listening?</option>
                        <option value={'listening'}>Currently Listening</option>
                        <option value={'listened'}>Listened</option>
                        <option value={'wantToListen'}>Want to Listen</option>
                    </select>
                </div>
                <div>
                    {/* add conditional to show rating option for listened, listening only */}
                    <select className="form-select" aria-label="Default select example" id="rating" value={this.state.rating} onChange={ this.handleChange } >
                        <option selected>Rating</option>
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
}