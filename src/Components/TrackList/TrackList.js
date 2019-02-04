import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
    render() {
        return (
            <div tracks={this.props.searchResults} class="TrackList">
                {
                    this.props.tracks.map(track => {
                        return <Track track={this.state.track} key={track.id} />
                    })
                }
            </div>
        );
    }
}

export default TrackList;
