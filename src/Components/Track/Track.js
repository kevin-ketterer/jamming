import React, { Component } from 'react';
import './Track.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'

class Track extends Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.state = {
            currentlyPlaying: false,
        };
        this.togglePlayPreview = this.togglePlayPreview.bind(this);
        this.renderPreview = this.renderPreview.bind(this);
    }
    renderAction() {
        if (this.props.isRemoval) {
            return <a className="Track-action" onClick={this.removeTrack}>-</a>
        }
        return <a className="Track-action" onClick={this.addTrack}>+</a>;
    }
    render() {
        return (
            <div track={this.props.tracks} className="Track">
                <audio name="media" src={this.props.track.preview} type="audio/mpg" ref="audio" onEnded={() => this.setState({ currentlyPlaying: false })} />
                <div className="Track-preview-container">
                        {this.renderPreview()}
                </div>
                <div className="Track-cover-preview">
                    <img className="Track-album-cover" src={this.props.track.cover} alt="album cover"/>
                </div>
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }

    renderPreview() {
        if(this.props.track.preview) {
            if (!this.state.currentlyPlaying) {
                return (
                    <FontAwesomeIcon Track-preview-icon icon={faPlay} aria-hidden="true" onClick={this.togglePlayPreview} />
                );
            } else {
                return (
                    <FontAwesomeIcon Track-preview-icon icon={faPause} aria-hidden="true" onClick={this.togglePlayPreview} />
                );
            }
        } else {
            return <p className="Track-preview-unavailable">No <br/> Preview <br />Available</p>
        }
    }

    togglePlayPreview() {
        const audio = this.refs.audio;
        if (!this.state.currentlyPlaying) {
            audio.play();
            this.setState({ 
                currentlyPlaying: true, 
            });
        } else {
            audio.pause();
            this.setState({ 
                currentlyPlaying: false,
            });
        }
    }

    addTrack(e) {
        this.props.onAdd(this.props.track);
    }
    
    removeTrack(e) {
        this.props.onRemove(this.props.track);
    }
}

export default Track;
