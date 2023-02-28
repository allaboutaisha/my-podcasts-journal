import { Component } from 'react';

export default class PodcastForm extends Component {
    state = {
        name: '',
        host: '',
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

    render() {
        return (<h1>New Podcast Form</h1>)
    }
}