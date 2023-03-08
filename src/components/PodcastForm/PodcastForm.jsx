import { Component } from 'react';

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

    handleSubmit = (e) => {
        e.preventDefault();
        const formData = {...this.state};
        console.log(formData);
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div className="row mb-3">
                    <label for="name" className="visually-hidden">Podcast</label>
                    <input type="text" className="form-control" id="name" placeholder="Podcast" value={this.state.name} onChange={ this.handleChange } />
                </div>
                <div className="row mb-3">
                    <label for="host" className="visually-hidden">Host</label>
                    <input type="text" className="form-control" id="host" placeholder="Host" value={this.state.host} onChange={ this.handleChange } />
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
                <div className="row mb-3">
                    <label for="genre" className="visually-hidden">Genre</label>
                    <input type="text" className="form-control" id="genre" placeholder="Genre" value={this.state.genre} onChange={ this.handleChange } />
                </div>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Listening?</legend>
                    <div className="col-auto">
                        <div className="form-check" >
                            <input className="form-check-input" type="radio" name="gridRadios" id="listening" value="currently listening" checked={this.state.listening === "currently listening"} onChange={this.handleChange} />
                            <label className="form-check-label" for="gridRadios1">
                                Listening
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="listening" value="listened" checked={this.state.listening === "listened"} onChange={this.handleChange} />
                            <label className="form-check-label" for="gridRadios2">
                                Listened
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="listening" value="want to listen" checked={this.state.listening === "want to listen"} onChange={this.handleChange} />
                            <label className="form-check-label" for="gridRadios3">
                                Want to Listen
                            </label>
                        </div>
                    </div>
                </fieldset>
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