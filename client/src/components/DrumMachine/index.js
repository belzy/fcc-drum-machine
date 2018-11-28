import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import SoundButton from './SoundButton/index';
import Typography from '@material-ui/core/Typography';
import * as sounds from './assets/index';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  buttons: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '8px',
    width: '360px'
  },
}

class DrumMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      track: '(Track)',
    }

    this.setTrack = this.setTrack.bind(this);

  }

  setTrack(track) {
    this.setState({ track })
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handle);
  }

  render() {

    const { classes } = this.props;
    const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    const soundsArr = Object.values(sounds);
    const tracks = ['Hat One', 'Hat Two', 'Hat Three', 'Kick One', 'Kick Two', 'Kick Three', 'Snare One', 'Snare Two', 'Snare Three'];

    return (
      <div id='drum-machine' style={{margin: '80px auto', display: 'flex', justifyContent: 'center'}}>
        <Paper>
          <div id='display' style={{textAlign: 'center', fontSize: '26px', margin: '0px'}}>
            <h3>
              {this.state.track}
            </h3>
          </div>
          <div style={ styles.buttons }>
            {soundsArr.map((src, i) => <SoundButton track={tracks[i]} setTrack={this.setTrack} key={i} audioSrc={src} id={keys[i]} keyPress={keys[i]} />)}
          </div>
        </Paper>
      </div>
    );
  }
}

export default DrumMachine;
