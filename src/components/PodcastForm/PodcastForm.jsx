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

    handleChange

    handleSubmit

    render() {
        return (
            <form>
                <div className="row mb-3">
                    <label for="name" className="visually-hidden">Podcast</label>
                    <input type="text" className="form-control" id="name" placeholder="Podcast" value={this.state.name}/>
                </div>
                <div className="row mb-3">
                    <label for="host" className="visually-hidden">Host</label>
                    <input type="text" className="form-control" id="host" placeholder="Host" value={this.state.host} />
                </div>
                <div className="row mb-3">
                    <label for="thumbnail" className="visually-hidden">Thumbnail URL</label>
                    <input type="text" className="form-control" id="host" placeholder="URL" value={this.state.thumbnail} />
                </div>
                <div className="row mb-3">
                    <label for="episodeName" className="visually-hidden">Episode</label>
                    <input type="text" className="form-control" id="episodeName" placeholder="Episode" value={this.state.episodeName} />
                </div>
                <div className="row mb-3">
                    <label for="episodeNum" className="visually-hidden">Episode Number</label>
                    <input type="text" className="form-control" id="episodeNum" placeholder="Episode Number" value={this.state.episodeNum} />
                </div>
                <div className="row mb-3">
                    <label for="guest" className="visually-hidden">Guest</label>
                    <input type="text" className="form-control" id="guest" placeholder="Guest" value={this.state.guest} />
                </div>
                <div className="row mb-3">
                    <label for="dateListened" className="visually-hidden">Date</label>
                    <input type="date" className="form-control" id="dateListened" value={this.state.dateListened} />
                </div>
                <div className="row mb-3">
                    <label for="genre" className="visually-hidden">Genre</label>
                    <input type="text" className="form-control" id="genre" placeholder="Genre" value={this.state.genre} />
                </div>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Listening?</legend>
                    <div className="col-auto">
                        <div className="form-check" >
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="currently listening" checked />
                            <label className="form-check-label" for="gridRadios1">
                                Listening
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="listened" />
                            <label className="form-check-label" for="gridRadios2">
                                Listened
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="want to listen" />
                            <label className="form-check-label" for="gridRadios3">
                                Want to Listen
                            </label>
                        </div>
                    </div>
                </fieldset>
                <div>
                    {/* add conditional to show rating option for listened, listening */}
                    <select className="form-select" aria-label="Default select example" value={this.state.rating}>
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