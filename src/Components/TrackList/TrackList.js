import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {playingTrackId: null};
    this.setPlayingTrackId = this.setPlayingTrackId.bind(this);
    this.getPlayingTrackId = this.getPlayingTrackId.bind(this);
    this.stopPlayingTrack = this.stopPlayingTrack.bind(this);
    this.getPlayingTrack = this.getPlayingTrack.bind(this);
  }

  getPlayingTrack(id) {
    return this.props.tracks.filter(track => {
      return track.id === id;
    })
  }

  setPlayingTrackId(id) {
    this.setState ({
      playingTrackId: id
    });
  }

  getPlayingTrackId() {
    return this.state.playingTrackId;
  }

  stopPlayingTrack(id) {
    const playingTrack = this.getPlayingTrack(id)[0];
 
  }

  render() {
    return (
      <div className="TrackList">
        {
          this.props.tracks.map(
            track => <Track 
              stopPlayingTrack={this.stopPlayingTrack}
              setPlayingTrack={this.setPlayingTrackId}
              getPlayingTrack={this.getPlayingTrackId}
              getPlayingTrackId={this.getPlayingTrackId}
              setPlayingTrackId={this.setPlayingTrackId}
              key={track.id} 
              track={track} 
              onAdd={this.props.onAdd} 
              onRemove={this.props.onRemove} 
              isRemoval={this.props.isRemoval} 
            />
          )
        }
      </div>
    );
  }
}

export default TrackList;
