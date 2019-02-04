import React, { Component } from 'react';
import './Track.css';

const track = {
    id: 100,
    name: 'Eruption',
    artist: 'Van Halen',
    album: 'Van Halen'
}
let isRemoval

class Track extends Component {
    renderAction() {
        if (isRemoval) {
            return <a className="Track-action">+</a>
        }
        return <a className="Track-action">-</a>;
    }
    render() {
        return (
            <div track={track} className="Track">
                <div className="Track-information">
                    <h3>{track.name}</h3>
                    <p>{track.artist} | {track.album}</p>
                </div>

            </div>
        );
    }
}

export default Track;
